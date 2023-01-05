export enum OperationEnum {
    CreateOrgContact,
    DeleteOrgContact,
    UpdateOrgContact,
    MyAccountUpdate,
    MyAccountContactCreate,
    MyAccountContactUpdate,
    MyAccountContactDelete,
    PasswordChanged,
    UserCreate,
    UserUpdate,
    UserCreateWithIdamRegister,
    UserUpdateWithIdamRegister,
    UserPasswordChange,
    UserDelete,
    GroupAdd,
    GroupNameUpdate,
    GroupUserAdd,
    GroupUserUpdate,
    GroupRoleUpdate,
    GroupDelete,
    CreateSite,
    DeleteSite,
    UpdateSite,
    CreateSiteContact,
    DeleteSiteContact,
    UpdateSiteContact
}

export enum UserTitleEnum {
    Mr,
    Mrs,
    Miss,
    Ms,
    Doctor,
    Unspecified
}

export enum AssignedContactType {
    None,
    User,
    Site
}

export enum ContactAssignedStatus {
    all,
    original,
    assigned
}

export enum BulkUploadStatus {
    processing,
    docUploadValidationFail,
    validating,
    validationFail,
    migrating,
    migrationCompleted
<<<<<<< HEAD
=======
}

export enum ManualValidationStatus {
    approve,
    decline,
    remove
>>>>>>> 3d554acd5a0efea7cadcca5d141f70df1310a72d
}