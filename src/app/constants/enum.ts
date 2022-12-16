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
>>>>>>> 0ff47456a2e9ef3aa060a26b6dddf8584fa5cd95
}