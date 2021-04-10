
export class PermissionAssignment {

    id: number | undefined;
    securityUserId: number | undefined;
    securityGroupId: number | undefined;
    permissionId: number | undefined;

    fullControl: boolean | undefined;
    view: boolean | undefined;
    add: boolean | undefined;
    edit: boolean | undefined;
    activate: boolean | undefined;
    allow: boolean | undefined;

}