
export class PermissionAssignment {

    id!: number;
    securityUserId!: number;
    securityGroupId!: number;
    permissionId!: number;

    fullControl: boolean | undefined;
    view: boolean | undefined;
    add: boolean | undefined;
    edit: boolean | undefined;
    activate: boolean | undefined;
    allow: boolean | undefined;

}