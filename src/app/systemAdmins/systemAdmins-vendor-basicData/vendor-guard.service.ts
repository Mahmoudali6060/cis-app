import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export  class VendorDetailGuard implements CanActivate {

    enableMyAccountBtn: boolean = false;
    constructor(private _router: Router,
                private toastr: ToastrService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (route.url[1].path.toLocaleLowerCase() == 'new')
            return true;

        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            this.toastr.error('Invalid vendor Id', '');
            // start a new navigation to redirect to list page
            this._router.navigate(['/vendors']);
            // abort current navigation
            return false;
        };
        return true;
    }
}
