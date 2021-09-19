import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { AuthGuard } from './services/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { TokenComponent } from './pages/token/token.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AuthSuccessComponent } from './pages/auth-success/auth-success.component';
import { RegistrationSuccessComponent } from './pages/registration-success/registration-success.component';
import { ManageOrganisationLoginComponent } from './pages/manage-organisation/manage-organisation-login/manage-organisation-login.component';
import { ManageOrgRegStep1Component } from './pages/manage-organisation/manage-organisation-registration-step-1/manage-organisation-registration-step-1.component';
import { ManageOrgRegStep2Component } from './pages/manage-organisation/manage-organisation-registration-step-2/manage-organisation-registration-step-2.component';
import { ManageOrgRegStep3Component } from './pages/manage-organisation/manage-organisation-registration-step-3/manage-organisation-registration-step-3.component';
import { ManageOrgRegAdditionalIdentifiersComponent } from './pages/manage-organisation/manage-organisation-registration-additional-identifiers/manage-organisation-registration-additional-identifiers.component';
import { ManageOrgRegAddUserComponent } from './pages/manage-organisation/manage-organisation-registration-add-user/manage-organisation-registration-add-user.component';
import { ManageOrgRegSuccessComponent } from './pages/manage-organisation/manage-organisation-registration-success/manage-organisation-registration-success.component';
import { ManageOrgRegFailureComponent } from './pages/manage-organisation/manage-organisation-registration-failure/manage-organisation-registration-failure.component';
import { ManageOrgRegErrorComponent } from './pages/manage-organisation/manage-organisation-registration-error/manage-organisation-registration-error.component';
import { ManageOrgRegErrorUsernameExistsComponent } from './pages/manage-organisation/manage-organisation-registration-error-username-already-exists/manage-organisation-registration-error-username-already-exists.component';
import { ManageOrgRegErrorNotFoundComponent } from './pages/manage-organisation/manage-organisation-registration-error-not-found/manage-organisation-registration-error-not-found.component';
import { ManageOrgRegConfirmComponent } from './pages/manage-organisation/manage-organisation-registration-confirm/manage-organisation-registration-confirm.component';
import { ManageOrgRegDetailsWrongComponent } from './pages/manage-organisation/manage-organisation-registration-error-details-wrong/manage-organisation-registration-error-details-wrong.component';
import { ManageOrgRegOrgNotFoundComponent } from './pages/manage-organisation/manage-organisation-registration-error-not-my-organisation/manage-organisation-registration-error-not-my-organisation.component';
import { ManageOrganisationProfileComponent } from './pages/manage-organisation/manage-organisation-profile/manage-organisation-profile.component';
import { ManageOrganisationContactEditComponent } from './pages/manage-organisation/manage-organisation-contact-edit/manage-organisation-contact-edit.component';
import { ManageOrganisationContactDeleteComponent } from './pages/manage-organisation/manage-organisation-contact-delete/manage-organisation-contact-delete.component';
import { ManageOrganisationContactOperationSuccessComponent } from './pages/manage-organisation/manage-organisation-contact-operation-success/manage-organisation-contact-operation-success.component';
import { UserProfileComponent } from './pages/user-profile/user-profile-component';
import { ManageOrgRegErrorGenericComponent } from './pages/manage-organisation/manage-organisation-registration-error-generic/manage-organisation-registration-error-generic.component';
import { UserContactEditComponent } from './pages/user-contact/user-contact-edit/user-contact-edit.component';
import { OperationSuccessComponent } from './pages/operation-success/operation-success.component';
import { OperationFailedComponent } from './pages/operation-failed/operation-failed.component';
import { ManageOrganisationRegistryComponent } from './pages/manage-organisation/manage-organisation-profile-registry/manage-organisation-profile-registry.component';
import { ManageOrganisationRegistrySearchComponent } from './pages/manage-organisation/manage-organisation-profile-registry-search/manage-organisation-profile-registry-search.component';
import { ManageOrganisationRegistryConfirmComponent } from './pages/manage-organisation/manage-organisation-profile-registry-confirm/manage-organisation-profile-registry-confirm.component';
import { ManageOrganisationRegistryDetailsWrongComponent } from './pages/manage-organisation/manage-organisation-profile-registry-error-details-wrong/manage-organisation-profile-registry-error-details-wrong.component';
import { ManageOrganisationRegistryOrgNotFoundComponent } from './pages/manage-organisation/manage-organisation-profile-registry-error-not-my-organisation/manage-organisation-profile-registry-error-not-my-organisation.component';
import { ManageOrganisationRegistryConfirmAdditionalDetailsComponent } from './pages/manage-organisation/manage-organisation-profile-registry-confirm-additional-identifiers/manage-organisation-profile-registry-confirm-additional-identifiers.component';
import { ManageOrganisationRegistryDeleteComponent } from './pages/manage-organisation/manage-organisation-profile-registry-delete/manage-organisation-profile-registry-delete.component';
import { ManageOrganisationRegistryDeleteConfirmationComponent } from './pages/manage-organisation/manage-organisation-profile-registry-delete-confirm/manage-organisation-profile-registry-delete-confirm.component';
import { ManageOrganisationRegistryAddConfirmationComponent } from './pages/manage-organisation/manage-organisation-profile-registry-add-confirmed/manage-organisation-profile-registry-add-confirmed.component';
import { ManageOrganisationRegistryErrorComponent } from './pages/manage-organisation/manage-organisation-profile-registry-error/manage-organisation-profile-registry-error.component';
import { ErrorComponent } from './pages/error/error.component';
import { ManageUserProfilesComponent } from './pages/manage-user/manage-user-profiles/manage-user-profiles-component';
import { ManageUserAddSelectionComponent } from './pages/manage-user/manage-user-add-selection/manage-user-add-selection-component';
import { ManageUserAddSingleUserDetailComponent } from './pages/manage-user/manage-user-add-single-user-detail/manage-user-add-single-user-detail.component';
import { ManageUserConfirmResetPasswordComponent } from './pages/manage-user/manage-user-confirm-reset-password/manage-user-confirm-reset-password-component';
import { ManageOrganisationSiteDeleteComponent } from './pages/manage-organisation/manage-organisation-profile-site-delete/manage-organisation-profile-site-delete.component';
import { ManageOrganisationSiteEditComponent } from './pages/manage-organisation/manage-organisation-profile-site-edit/manage-organisation-profile-site-edit.component';
import { UserContactDeleteConfirmComponent } from './pages/user-contact/user-contact-delete-confirm/user-contact-delete-confirm-component';
import { NominateComponent } from './pages/nominate/nominate.component';
import { ManageOrgRegStep1BComponent } from './pages/manage-organisation/manage-organisation-registration-step-1b/manage-organisation-registration-step-1b.component';
import { NominateSuccessComponent } from './pages/nominate-success/nominate-success.component';
import { ManageUserDeleteConfirmComponent } from './pages/manage-user/manage-user-delete-confirm/manage-user-delete-confirm-component';
import { ManageOrganisationErrorComponent } from './pages/manage-organisation/manage-organisation-error/manage-organisation-error.component';
import { ContactUsComponent } from './pages/contactus/contactus.component';
import { BuyerSearchComponent } from './pages/buyer/search/search.component';
import { BuyerConfirmComponent } from './pages/buyer/confirm/confirm.component';
import { BuyerDetailsComponent } from './pages/buyer/details/details.component';
import { BuyerSuccessComponent } from './pages/buyer/success/success.component';
import { OrgSupportSuccessComponent } from './pages/org-support/success/success.component';
import { OrgSupportConfirmComponent } from './pages/org-support/confirm/confirm.component';
import { OrgSupportDetailsComponent } from './pages/org-support/details/details.component';
import { OrgSupportSearchComponent } from './pages/org-support/search/search.component';
import { ManageGroupListComponent } from './pages/manage-group/manage-group-list/manage-group-list-component';
import { ManageGroupEditNameComponent } from './pages/manage-group/manage-group-edit-name/manage-group-edit-name-component';
import { ManageGroupEditUsersComponent } from './pages/manage-group/manage-group-edit-users/manage-group-edit-users-component';
import { ManageGroupEditUsersConfirmComponent } from './pages/manage-group/manage-group-edit-users-confirm/manage-group-edit-users-confirm-component';
import { ManageGroupEditRolesComponent } from './pages/manage-group/manage-group-edit-roles/manage-group-edit-roles-component';
import { ManageGroupEditRolesConfirmComponent } from './pages/manage-group/manage-group-edit-roles-confirm/manage-group-edit-roles-confirm-component';
import { ManageGroupViewComponent } from './pages/manage-group/manage-group-view/manage-group-view-component';
import { ManageGroupOperationSuccessComponent } from './pages/manage-group/manage-group-operation-success/manage-group-operation-success-component';
import { ManageGroupDeleteConfirmComponent } from './pages/manage-group/manage-group-delete-confirm/manage-group-delete-confirm-component';
import { ManageOrganisationProfileSuccessComponent } from './pages/manage-organisation/manage-organisation-profile-success/manage-organisation-profile-success.component';
import { BuyerConfirmChangesComponent } from './pages/buyer/confirm-changes/confirm.component';
import { ManageOrgRegRightToBuyComponent } from './pages/manage-organisation/manage-organisation-registration-rightToBuy/manage-organisation-registration-type.component';
import { ManageOrgRegBuyerTypeComponent } from './pages/manage-organisation/manage-organisation-registration-buyer-type/manage-organisation-registration-buyer-type.component';
import { RoleGuard } from './services/auth/role.guard';
import { BuyerErrorComponent } from './pages/buyer/error/error.component';
import { OrgSupportErrorComponent } from './pages/org-support/error/error.component';
import { ForgotPasswordSuccessComponent } from './pages/forgot-password-success/forgot-password-success';
import { AuthErrorComponent } from './pages/auth-error/auth-error.component';
import { ContactAssignSelectionComponent } from './pages/contact/contact-assign-selection/contact-assign-selection-component';
import { ContactAssignUserSearchComponent } from './pages/contact/contact-assign-user-search/contact-assign-user-search-component';
import { ContactAssignSiteSearchComponent } from './pages/contact/contact-assign-site-search/contact-assign-site-searchcomponent';
import { ContactAssignComponent } from './pages/contact/contact-assign/contact-assign-component';
import { ContactAssignConfirmComponent } from './pages/contact/contact-assign-confirm/contact-assign-confirm-component';
import { ContactAssignSuccessComponent } from './pages/contact/contact-assign-success/contact-assign-success-component';
import { ContactUnassignConfirmComponent } from './pages/contact/contact-unassign-confirm/contact-unassign-confirm-component';
import { ContactUnassignSuccessComponent } from './pages/contact/contact-unassign-success/contact-unassign-success-component';
import { ContactAssignErrorComponent } from './pages/contact/contact-assign-error/contact-assign-error-component';
import { ManageGroupErrorComponent } from './pages/manage-group/manage-group-error/manage-group-error.component';
import { HelpAndSupportComponent } from './pages/help-support/help-support-component';
import { MFAResetComponent } from './pages/mfa-reset/mfa-reset-component';
import { SendMFAResetNotificationComponent } from './pages/mfa-reset/send-notification/send-mfa-reset-notification';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'renewtkn', pathMatch: 'full', component: AuthErrorComponent },
  { path: 'home', data: { title: 'Dashboard' }, canActivate: [AuthGuard], pathMatch: 'full', component: HomeComponent },
  { path: 'error', data: { title: 'Error' }, pathMatch: 'full', component: ErrorComponent },
  { path: 'contactus', data: { title: 'Contact Us' }, pathMatch: 'full', component: ContactUsComponent },
  { path: 'profile', data: { title: 'My Profile', roles: ['MANAGE_MY_ACCOUNT'] }, canActivate: [AuthGuard, RoleGuard], pathMatch: 'full', component: UserProfileComponent },
  { path: 'operation-success/:operation', data: { title: 'Success' }, canActivate: [AuthGuard], pathMatch: 'full', component: OperationSuccessComponent },
  { path: 'operation-failed/:operation', data: { title: 'Failed' }, pathMatch: 'full', component: OperationFailedComponent },
  { path: 'change-password-success/:operation', data: { title: 'Success' }, pathMatch: 'full', component: OperationSuccessComponent },
  { path: 'change-password-failed/:operation', data: { title: 'Error' }, pathMatch: 'full', component: OperationFailedComponent },
  { path: 'user-contact-edit', data: { title: 'User Contact' }, canActivate: [AuthGuard], pathMatch: 'full', component: UserContactEditComponent },
  { path: 'user-contact-delete', data: { title: 'User Contact' }, canActivate: [AuthGuard], pathMatch: 'full', component: UserContactDeleteConfirmComponent },
  { path: 'forgot-password', data: { title: 'Forgot Password' }, pathMatch: 'full', component: ForgotPasswordComponent },
  { path: 'forgot-password-success', data: { title: 'Success' }, pathMatch: 'full', component: ForgotPasswordSuccessComponent },
  { path: 'change-password', data: { title: 'Change Password' }, canActivate: [AuthGuard], pathMatch: 'full', component: ChangePasswordComponent },
  { path: 'token', data: { title: 'Token' }, canActivate: [AuthGuard], pathMatch: 'full', component: TokenComponent },
  { path: 'authsuccess', data: { title: 'Auth Success' }, component: AuthSuccessComponent },
  { path: 'registration/success', data: { title: 'Success' }, component: RegistrationSuccessComponent },
  { path: 'manage-org/login', data: { title: 'Login' }, pathMatch: 'full', component: ManageOrganisationLoginComponent },
  { path: 'manage-org/register', data: { title: 'Register' }, pathMatch: 'full', component: ManageOrgRegStep1Component },
  { path: 'manage-org/register/start', data: { title: 'Start Registration' }, pathMatch: 'full', component: ManageOrgRegStep1BComponent },
  { path: 'manage-org/register/search', data: { title: 'Registration Search' }, pathMatch: 'full', component: ManageOrgRegStep2Component },
  { path: 'manage-org/register/search/:scheme/:id', data: { title: 'Search Results' }, pathMatch: 'full', component: ManageOrgRegStep3Component },
  { path: 'manage-org/register/search/:scheme/:id/additional-identifiers', data: { title: 'Additional Identifiers Search Results' }, pathMatch: 'full', component: ManageOrgRegAdditionalIdentifiersComponent },
  { path: 'manage-org/register/user', data: { title: 'Register User' }, pathMatch: 'full', component: ManageOrgRegAddUserComponent },
  { path: 'manage-org/register/confirm', data: { title: 'Confirm Registration' }, pathMatch: 'full', component: ManageOrgRegConfirmComponent },
  { path: 'manage-org/register/success', data: { title: 'Success' }, pathMatch: 'full', component: ManageOrgRegSuccessComponent },
  { path: 'manage-org/error/:reason', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrganisationErrorComponent },
  { path: 'manage-org/register/error', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrgRegErrorComponent },
  { path: 'manage-org/register/error/generic', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrgRegErrorGenericComponent },
  { path: 'manage-org/register/error/username', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrgRegErrorUsernameExistsComponent },
  { path: 'manage-org/register/error/notfound', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrgRegErrorNotFoundComponent },
  { path: 'manage-org/register/error/reg-id-exists', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrgRegFailureComponent },
  { path: 'manage-org/register/error/wrong-details', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrgRegDetailsWrongComponent },
  { path: 'manage-org/register/error/not-my-details', data: { title: 'Error' }, pathMatch: 'full', component: ManageOrgRegOrgNotFoundComponent },
  { path: 'manage-org/profile', data: { title: 'Manage Organisation', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationProfileComponent },
  { path: 'manage-org/profile/contact-edit', data: { title: 'Organisation Contact', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationContactEditComponent },
  { path: 'manage-org/profile/contact-delete', data: { title: 'Organisation Contact', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationContactDeleteComponent },
  { path: 'manage-org/profile/site/contact-edit', data: { title: 'Site Contact', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationContactEditComponent },
  { path: 'manage-org/profile/site/contact-delete', data: { title: 'Site Contact', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationContactDeleteComponent },
  { path: 'manage-org/profile/contact-operation-success/:operation', data: { title: 'Success', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationContactOperationSuccessComponent },
  { path: 'manage-org/profile/:organisationId/registry', data: { title: 'Organisation Registry', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryComponent },
  { path: 'manage-org/profile/:organisationId/registry/error/:reason', data: { title: 'Error', roles: ['MANAGE_ORGS'] }, canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryErrorComponent },
  { path: 'manage-org/profile/success', data: { title: 'Success', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationProfileSuccessComponent },
  { path: 'manage-org/profile/registry/search', data: { title: 'Registry Search', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistrySearchComponent },
  { path: 'manage-org/profile/:organisationId/registry/search', data: { title: 'Registry Search', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistrySearchComponent },
  { path: 'manage-org/profile/:organisationId/registry/search/:scheme/:id/additional-identifiers', data: { title: 'Registry Additional Identifiers Search', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryConfirmAdditionalDetailsComponent },
  { path: 'manage-org/profile/:organisationId/registry/search/:scheme/:id', data: { title: 'Registry Search Results', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryConfirmComponent },
  { path: 'manage-org/profile/:organisationId/registry/confirmation/:scheme/:id', data: { title: 'Registry Search Results Confirmation', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryAddConfirmationComponent },
  { path: 'manage-org/profile/:organisationId/registry/search/wrong-details', data: { title: 'Registration Error', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryDetailsWrongComponent },
  { path: 'manage-org/profile/:organisationId/registry/search/not-my-org', data: { title: 'Registration Error', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryOrgNotFoundComponent },
  { path: 'manage-org/profile/:organisationId/registry/delete/:scheme/:id', data: { title: 'Registration Delete', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryDeleteComponent },
  { path: 'manage-org/profile/:organisationId/registry/delete/confirmation/:scheme/:id', data: { title: 'Registration Delete Confirmation', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationRegistryDeleteConfirmationComponent },
  { path: 'manage-users', data: { title: 'Manage Users', roles: ['MANAGE_USERS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageUserProfilesComponent },
  { path: 'manage-users/add-user-selection', data: { title: 'Manage Users', roles: ['MANAGE_USERS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageUserAddSelectionComponent },
  { path: 'manage-users/add-user/details', data: { title: 'Manage Users', roles: ['MANAGE_USERS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageUserAddSingleUserDetailComponent },
  { path: 'manage-users/confirm-reset-password', data: { title: 'Manage Users', roles: ['MANAGE_USERS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageUserConfirmResetPasswordComponent },
  { path: 'manage-users/confirm-user-delete', data: { title: 'Manage Users', roles: ['MANAGE_USERS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageUserDeleteConfirmComponent },
  { path: 'manage-org/profile/site/edit', data: { title: 'Manage Site', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationSiteEditComponent },
  { path: 'manage-org/profile/site/delete', data: { title: 'Manage Site', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageOrganisationSiteDeleteComponent },
  { path: 'nominate', data: { title: 'Nominate' }, pathMatch: 'full', component: NominateComponent },
  { path: 'nominate/success', data: { title: 'Success' }, pathMatch: 'full', component: NominateSuccessComponent },
  { path: 'buyer/search', data: { title: 'Manage Buyers', roles: ['MANAGE_SUBSCRIPTIONS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: BuyerSearchComponent },
  { path: 'buyer/details/:id', data: { title: 'Manage Buyers', roles: ['MANAGE_SUBSCRIPTIONS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: BuyerDetailsComponent },
  { path: 'buyer/confirm/:id', data: { title: 'Manage Buyers', roles: ['MANAGE_SUBSCRIPTIONS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: BuyerConfirmComponent },
  { path: 'buyer/confirm-changes/:id', data: { title: 'Manage Buyers', roles: ['MANAGE_SUBSCRIPTIONS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: BuyerConfirmChangesComponent },
  { path: 'buyer/error', data: { title: 'Error', roles: ['MANAGE_SUBSCRIPTIONS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: BuyerErrorComponent },
  { path: 'buyer/success', data: { title: 'Success', roles: ['MANAGE_SUBSCRIPTIONS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: BuyerSuccessComponent },
  { path: 'org-support/search', data: { title: 'Org Support', roles: ['ORG_USER_SUPPORT'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: OrgSupportSearchComponent },
  { path: 'org-support/details/:id', data: { title: 'Org Support', roles: ['ORG_USER_SUPPORT'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: OrgSupportDetailsComponent },
  { path: 'org-support/confirm/:userName', data: { title: 'Org Support', roles: ['ORG_USER_SUPPORT'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: OrgSupportConfirmComponent },
  { path: 'org-support/success/:userName', data: { title: 'Success', roles: ['ORG_USER_SUPPORT'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: OrgSupportSuccessComponent },
  { path: 'manage-groups', data: { title: 'Manage Groups', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupListComponent },
  { path: 'manage-groups/view', data: { title: 'Manage Groups', roles: ['MANAGE_USERS', 'MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupViewComponent },
  { path: 'manage-groups/edit-name', data: { title: 'Manage Groups Edit', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupEditNameComponent },
  { path: 'manage-groups/edit-users', data: { title: 'Manage Groups Edit Users', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupEditUsersComponent },
  { path: 'manage-groups/edit-users-confirm', data: { title: 'Manage Groups Edit Users', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupEditUsersConfirmComponent },
  { path: 'manage-groups/edit-roles', data: { title: 'Manage Groups Edit Roles', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupEditRolesComponent },
  { path: 'manage-groups/edit-roles-confirm', data: { title: 'Manage Groups Edit Roles', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupEditRolesConfirmComponent },
  { path: 'manage-groups/operation-success/:operation', data: { title: 'Success', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupOperationSuccessComponent },
  { path: 'manage-groups/delete-group-confirm', data: { title: 'Manage Groups Delete', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupDeleteConfirmComponent },
  { path: 'manage-groups/error', data: { title: 'Error', roles: ['MANAGE_GROUPS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ManageGroupErrorComponent },
  { path: 'org-support/error', data: { title: 'Error', roles: ['ORG_USER_SUPPORT'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: OrgSupportErrorComponent },
  { path: 'manage-org/register/type', data: { title: 'Registration' }, pathMatch: 'full', component: ManageOrgRegRightToBuyComponent },
  { path: 'manage-org/register/buyer-type', data: { title: 'Registration' }, pathMatch: 'full', component: ManageOrgRegBuyerTypeComponent },
  { path: 'contact-assign/select', data: { title: 'Select Contact Type', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactAssignSelectionComponent },
  { path: 'contact-assign/user-search', data: { title: 'Assign Contacts User Search', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactAssignUserSearchComponent },
  { path: 'contact-assign/site-search', data: { title: 'Assign Contacts Site Search', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactAssignSiteSearchComponent },
  { path: 'contact-assign', data: { title: 'Assign Contacts', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactAssignComponent },
  { path: 'contact-assign/confirm', data: { title: 'Assign Contacts Confirm', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactAssignConfirmComponent },
  { path: 'contact-assign/success', data: { title: 'Success', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactAssignSuccessComponent },
  { path: 'contact-unassign/confirm', data: { title: 'Unassign Contact Confirm', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactUnassignConfirmComponent },
  { path: 'contact-unassign/success', data: { title: 'Success', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactUnassignSuccessComponent },
  { path: 'contact-assign/error', data: { title: 'Error', roles: ['MANAGE_ORGS'] }, pathMatch: 'full', canActivate: [AuthGuard, RoleGuard], component: ContactAssignErrorComponent },
  { path: 'help-support', data: { title: 'Help and support' }, pathMatch: 'full', component: HelpAndSupportComponent },
  { path: 'mfaresetnotification', data: { title: 'MFA Reset' }, pathMatch: 'full', component: SendMFAResetNotificationComponent },
  { path: 'mfareset', data: { title: 'MFA Reset' }, pathMatch: 'full', component: MFAResetComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
