import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WrapperUserDelegatedService } from 'src/app/services/wrapper/wrapper-user-delegated.service';
<<<<<<< HEAD
=======
import { environment } from 'src/environments/environment';
>>>>>>> 3d554acd5a0efea7cadcca5d141f70df1310a72d
import { ManageDelegateService } from '../../service/manage-delegate.service';

@Component({
  selector: 'app-delegated-organisation',
  templateUrl: './delegated-organisation.component.html',
  styleUrls: ['./delegated-organisation.component.scss'],
})
export class DelegatedOrganisationComponent implements OnInit {
  public organisationList: any = [];
  public userDetails: any = {};
  public primaryRoleSelected: any;
  public secondaryRoleSelected: any;
  private roleData:any;
  private roleInfo: any;
<<<<<<< HEAD
=======
  private isDeleagation:boolean=environment.appSetting.hideDelegation
>>>>>>> 3d554acd5a0efea7cadcca5d141f70df1310a72d
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private delegatedService: WrapperUserDelegatedService,
    private DelegateService: ManageDelegateService
<<<<<<< HEAD
  ) {}
=======
  ) {
    if(this.isDeleagation === true){
      this.route.navigateByUrl('/home');
      return
     }
  }
>>>>>>> 3d554acd5a0efea7cadcca5d141f70df1310a72d

  ngOnInit(): void {
    if (
      this.DelegateService.getDelegatedOrg == '0' ||
      this.DelegateService.getDelegatedOrg == null || this.DelegateService.getDelegatedOrg == ''
    ) {
      this.roleInfo=0
      this.primaryRoleSelected = 'primaryselected';
      this.roleData=0
    } else {
      this.secondaryRoleSelected = this.DelegateService.getDelegatedOrg;
      this.roleInfo=this.DelegateService.getDelegatedOrg;
      this.roleData=this.DelegateService.getDelegatedOrg
    }
    this.getDelegatedOrganisation();
  }

    public  get isDisabled(){
      if(this.roleData == this.roleInfo){
         return true
      }else{
         return false
      }
    }

  private getDelegatedOrganisation(): void {
    this.delegatedService.getDeligatedOrg().subscribe({
      next: (data: any) => {
        this.userDetails = data;
        this.organisationList = data.detail.delegatedOrgs;
      },
      error: (error: any) => {
        console.log('error', error);
      },
    });
  }

  public setPrimaryOrg() {
    this.secondaryRoleSelected = null;
    this.roleInfo = 0; 
  }

  public setSecondaryOrg(orgDetails: any) {
    this.primaryRoleSelected = null;
    this.roleInfo = orgDetails.delegatedOrgId;
  }
  onSubmit() {
    this.DelegateService.setDelegatedOrg(this.roleInfo);
  }
  public Cancel() {
    window.history.back();
  }
}
