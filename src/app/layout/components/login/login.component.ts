import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { ToastrService } from 'ngx-toastr';
import { remoteServerUrl } from '../../../app.config';
import { AccountService } from '../../../security/shared/account.service';
import { UserTypeEnum } from '../../../security/shared/user-type.enum';

@Component({
  selector: 'app-layout-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor() { }


  ngOnInit(): void {
  }


 

}
