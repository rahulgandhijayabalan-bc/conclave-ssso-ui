import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ScrollHelper } from 'src/app/services/helper/scroll-helper.services';
import { UIState } from 'src/app/store/ui.states';
import { environment } from 'src/environments/environment';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-govuk-table',
  templateUrl: './govuk-table.component.html',
  styleUrls: ['./govuk-table.component.scss']
})
export class GovUKTableComponent extends BaseComponent implements OnInit {

  @Input() headerTextKeys!: string[];
  @Input() data!: any[];
  @Input() dataKeys!: string[];
  @Input() isHyperLinkVisible?: boolean;
  @Input() hyperLinkText?: string;
  @Input() isCheckBoxVisible?: boolean;
  @Input() isRadioVisible?: boolean;
  @Input() useServerPagination?: boolean;
  @Input() serverPageCount?: any;
  @Input() serverPageCurrentPage?: number;
  @Input() useClientPagination?: boolean;
  @Input() pageName?: string;
  
  @Output() hyperLinkClickEvent = new EventEmitter<any>();
  @Output() checkBoxClickEvent = new EventEmitter<any>();
  @Output() radioClickEvent = new EventEmitter<any>();
  @Output() changeCurrentPageEvent = new EventEmitter<number>();

  pageCount?: number;
  currentPage: number = 1;
  totalPagesArray: number[] = [];
  pageSize: number = environment.listPageSize;
  tableVisibleData!: any[];
  selectedRadioId: string = 'table-radio-id-non';
  public ServerPageCount:any=[]
  constructor(
    // private translateService: TranslateService,
    protected uiStore: Store<UIState>, protected viewportScroller: ViewportScroller, protected scrollHelper: ScrollHelper) {
    super(uiStore, viewportScroller, scrollHelper);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.useClientPagination) {
      this.pageCount = Math.ceil(this.data.length / this.pageSize);
      this.totalPagesArray = Array(this.pageCount).fill(0).map((x, i) => i + 1);
      this.tableVisibleData = this.data.slice(0, this.pageSize);
      this.currentPage = 1;
    }
    else {
      this.totalPagesArray = Array(this.serverPageCount).fill(0).map((x, i) => i + 1);
      this.pageCount = this.serverPageCount;
      this.tableVisibleData = this.data;
      this.currentPage = this.serverPageCurrentPage || 1;
      this.ServerPageCount = Array(this.serverPageCount * 10).fill(0).map((x, i) => i + 1);
    }
  }

  onRowClick(dataRow: any, index: number) {
    if (this.isCheckBoxVisible) {
      dataRow.isChecked = !dataRow.isChecked;
      this.checkBoxClickEvent.emit(dataRow);
    }
    else if (this.isRadioVisible) {
      this.selectedRadioId = 'table-radio-id-' + index;
      this.radioClickEvent.emit(dataRow);
    }
    else if (this.isHyperLinkVisible) {
      this.hyperLinkClickEvent.emit(dataRow);
    }
    else {
    }
  }

  onSetPageClick(pageNumber: number) {
    if (this.isRadioVisible) { // Emit the event to remove the radio selection 
      this.selectedRadioId = 'table-radio-id-non';
      this.radioClickEvent.emit(null);
    }
    this.currentPage = pageNumber;
    if (this.useClientPagination) {
      let startIndex = this.pageSize * (this.currentPage - 1);
      let endIndex = startIndex + this.pageSize;
      this.tableVisibleData = this.data.slice(startIndex, endIndex);
    }
    else {
      this.changeCurrentPageEvent.emit(pageNumber);
    }
  }

  onChangeServer(pageOfItems:any,data:string){
    console.log("pageOfItems",pageOfItems)
    console.log("data",data)
    let PageNumber:number;  
    PageNumber = pageOfItems.pop() / 10
    // if(pageOfItems){
    //   this.changeCurrentPageEvent.emit(PageNumber);
    // }
  }



  onChangeClinet(pageOfItems: Array<any>) {
    if (this.useClientPagination) {
    this.tableVisibleData = pageOfItems;
   }
  }
}