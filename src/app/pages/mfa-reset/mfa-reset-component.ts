import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseComponent } from 'src/app/components/base/base.component';
import { UIState } from 'src/app/store/ui.states';
import { ScrollHelper } from 'src/app/services/helper/scroll-helper.services';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MFAService } from 'src/app/services/auth/mfa.service';

@Component({
  selector: 'mfa-reset-component',
  templateUrl: './mfa-reset-component.html',
  styleUrls: ['./mfa-reset-component.scss']
})
export class MFAResetComponent extends BaseComponent implements OnInit {
  resetsuccess: boolean = false;
  userName : string = '';
  resultVerified : boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, protected uiStore: Store<UIState>,
    private mfaService : MFAService,
    private authService: AuthService,
    protected viewportScroller: ViewportScroller, protected scrollHelper: ScrollHelper) {
    super(uiStore, viewportScroller, scrollHelper);
  }

  onNavigateLinkClick(){
    this.authService.logOutAndRedirect();
}

  ngOnInit() {
    debugger;

    this.route.queryParams.subscribe(para => {
      if (para.success != undefined) {
        this.resetsuccess = true;
        this.resultVerified = true;
      }
      else if (para.error != undefined) {
        this.resetsuccess = false;
        this.resultVerified = true;
      }
      else {
        this.mfaService.resetMFA(para.t).toPromise().then(() => {
          this.router.navigateByUrl('mfareset?success');
        }).catch((error: any) => {
          this.router.navigateByUrl('mfareset?error');         
        });
      }
      this.userName = para.u;      
    });
  }
}
