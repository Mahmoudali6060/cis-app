import {PermissionAssignment} from '../classes/permissionAssignment.class';
export class UserPermissions {

    id!:string;
    type!:string;
    permissions: PermissionAssignment[] | undefined;

    constructor() {
        //this.hour = selectedDate.getHours();
        //this.minute = selectedDate.getMinutes();
        //this.dateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(),
        //    selectedDate.getDate(), this.hour, this.minute);

        //this.name = this.utilClass.getFormattedTime(this.hour, this.minute);
        //this.amPmName = this.utilClass.getAmPmTime(this.hour, this.minute);
        //this.id = user.id;
        //this.permissions = user.permissions;
    }
}