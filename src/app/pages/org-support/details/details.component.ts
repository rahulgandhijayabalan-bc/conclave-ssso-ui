import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from 'src/app/components/base/base.component';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { UIState } from 'src/app/store/ui.states';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ciiService } from 'src/app/services/cii/cii.service';
import { UserService } from 'src/app/services/postgres/user.service';
import { OrganisationService } from 'src/app/services/postgres/organisation.service';
import { contactService } from 'src/app/services/contact/contact.service';
import { ContactType } from 'src/app/models/contactDetail';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { WrapperOrganisationService } from 'src/app/services/wrapper/wrapper-org-service';
import { WrapperUserService } from 'src/app/services/wrapper/wrapper-user.service';
import { Group, GroupList } from 'src/app/models/organisationGroup';
import { WrapperOrganisationGroupService } from 'src/app/services/wrapper/wrapper-org--group-service';
import { UserEditResponseInfo, UserProfileResponseInfo } from 'src/app/models/user';
import { ViewportScroller } from '@angular/common';
import { ScrollHelper } from 'src/app/services/helper/scroll-helper.services';

@Component({
  selector: 'app-org-support-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    slideAnimation({
      close: { 'transform': 'translateX(12.5rem)' },
      open: { left: '-12.5rem' }
    })
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrgSupportDetailsComponent extends BaseComponent implements OnInit {

  public user$!: Observable<any>;
  public user: UserProfileResponseInfo;
  public assign: boolean = true;
  public changeRoleEnabled: boolean = false;
  public resetPasswordEnabled: boolean = false;
  public resetMfaEnabled: boolean = false;
  public orgGroups!: Group[];
  public roles$!: Observable<any>;
  public roles!: [];
  @ViewChild('assignChk') assignChk!: ElementRef;
  @ViewChild('resetPassword') resetPassword!: ElementRef;

  constructor(private ref: ChangeDetectorRef, private formBuilder: FormBuilder, private translateService: TranslateService, private authService: AuthService, private ciiService: ciiService, private userService: UserService, private organisationService: OrganisationService, private organisationGroupService: WrapperOrganisationGroupService, private contactService: contactService, private wrapperOrgService: WrapperOrganisationService, private wrapperUserService: WrapperUserService, private router: Router, private route: ActivatedRoute, protected uiStore: Store<UIState>, protected viewportScroller: ViewportScroller, protected scrollHelper: ScrollHelper) {
    super(uiStore, viewportScroller, scrollHelper);
    this.user = {
      firstName: '',
      lastName: '',
      organisationId: '',
      title: 0,
      userName: '',
      mfaEnabled: false,
      detail: {
        id: 0,
        canChangePassword: false

      }
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.user$ = this.wrapperUserService.getUser(params.id).pipe(share());
        this.user$.subscribe({
          next: (result: UserProfileResponseInfo) => {
            this.user = result;
            this.getOrgGroups();
          }
        });
      }
    });
  }

  public onSelect(event: any, assigned: boolean) {
    // this.assign = assigned;
    if (event.target.nodeName === 'LABEL') {
      event.target.previousSibling.checked = !event.target.previousSibling.checked;
      this.changeRoleEnabled = event.target.previousSibling.checked;
    }
  }

  public onResetSelect(event: any) {
    // this.assign = assigned;
    if (event.target.nodeName === 'LABEL') {
      event.target.previousSibling.checked = !event.target.previousSibling.checked;
      this.resetPasswordEnabled = event.target.previousSibling.checked;
    }
  }

  public onMfaResetSelect(event: any) {
    this.resetMfaEnabled = event.target.checked;
  }

  public onContinueClick() {

    if (this.changeRoleEnabled && !this.resetPasswordEnabled && !this.resetMfaEnabled) {
      this.setOrgRoles();
    }
    else {
      this.router.navigateByUrl(`org-support/confirm/${this.user.userName}?rpwd=` + this.resetPasswordEnabled + `&rmfa=` + this.resetMfaEnabled + `&chrole=` + this.changeRoleEnabled);
    }
  }

  public onCancelClick() {
    this.router.navigateByUrl('org-support/search');
  }

  getOrgGroups() {
    this.organisationGroupService.getOrganisationGroups(this.user.organisationId).subscribe({
      next: (orgGroups: GroupList) => {
        this.orgGroups = orgGroups.groupList;
        this.orgGroups.map(group => {
          let isGroupOfUser: boolean = false;
          isGroupOfUser = this.user.detail.userGroups ? this.user.detail.userGroups.some(ug => ug.groupId == group.groupId) : false;
        });
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }

  setOrgRoles() {
    this.roles$ = this.organisationGroupService.getOrganisationRoles(this.user.organisationId).pipe(share());
    this.roles$.subscribe({
      next: (roles) => {
        const role = roles.find((x: any) => x.roleName === 'Organisation Administrator');
        if (role) {
          if (this.isAssigned()) { // Remove
            this.wrapperUserService.removeAdminRoles(this.user.userName).subscribe({
              next: (roleRemoveResponse: boolean) => {
                this.router.navigateByUrl(`org-support/success/${this.user.userName}?rpwd=`+ this.resetPasswordEnabled + `&rmfa=` + this.resetMfaEnabled + `&chrole=` + this.changeRoleEnabled);
              },
              error: (err: any) => {
                console.log(err);
                this.router.navigateByUrl(`org-support/error`);
              }
            });
          } else { // Add
            this.wrapperUserService.addAdminRole(this.user.userName).subscribe({
              next: (addAdminRoleResponse: boolean) => {
                if (addAdminRoleResponse) {
                  this.router.navigateByUrl(`org-support/success/${this.user.userName}?rpwd=`+ this.resetPasswordEnabled + `&rmfa=` + this.resetMfaEnabled + `&chrole=` + this.changeRoleEnabled);
                }
                else {
                  console.log("TODO: navigate to error page");
                  this.router.navigateByUrl(`org-support/success/${this.user.userName}?rpwd=`+ this.resetPasswordEnabled + `&rmfa=` + this.resetMfaEnabled + `&chrole=` + this.changeRoleEnabled);
                }
              },
              error: (err: any) => {
                console.log(err);
                this.router.navigateByUrl(`org-support/error`);
              }
            });
          }
        } else {
          this.router.navigateByUrl(`org-support/success/${this.user.userName}?rpwd=`+ this.resetPasswordEnabled + `&rmfa=` + this.resetMfaEnabled + `&chrole=` + this.changeRoleEnabled);
        }
      }
    });
  }

  isAssigned(): boolean {
    const adminName = 'ORG_ADMINISTRATOR';
    if (this.user.detail.rolePermissionInfo && this.user.detail.rolePermissionInfo.some(rp => rp.roleKey == adminName)) {
      return true;
    }
    else if (this.user.detail.userGroups && this.user.detail.userGroups.some((i: { accessRole: string; }) => i.accessRole === adminName)) {
      return true;
    }
    else {
      return false;
    }
  }

  isUserPasswordIdentifier(): boolean {
    if (this.user.detail.identityProvider === 'Username-Password-Authentication') {
      return true;
    }
    return false;
  }
}
