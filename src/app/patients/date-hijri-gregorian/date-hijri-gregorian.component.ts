import { Component, OnInit, SimpleChanges, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PatientService } from '../shared/patient.service'
import { SharedService } from '../../shared/shared/shared.service';
import { HijriMonthList, GregorianMonthList } from '../shared/MonthsListType.enum';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { UtilityClass } from '../../shared/shared/utility.class';
import { Subscription } from 'rxjs';

@Component({

    selector: 'date-hijri-gregorian',
    templateUrl: 'date-hijri-gregorian.component.html',
})

export class DateHijriGregorian implements OnInit, OnChanges {
    patientId!: string;
    @Input() birthDateInfo: any = { birthDateType: "" };
    @Output() onModelUpdated = new EventEmitter<any>();
    @Input() title: string = '';
    hagriDays: any = [];
    private subscription!: Subscription;
    gregorianDays: any = [];
    selctedDaysType: any = [];
    GregorianMonths: any = [];
    HijriMonths: any = [];
    differ: any;
    hagriYears: any = [];
    gregorianYears: any = [];
    selctedYearsType: any = [];
    selctedMonthsType: any = [];
    isDatePartsChanged: boolean = false;
    HagriDateValues: Date = new Date();
    GregorianDateValues: Date = new Date();
    showProgress = false;
    @Output() onNewDateSaved = new EventEmitter<any>();
    @ViewChild("fileInput") fileInput!: any;
    @ViewChild("patientAccountForm") patientAccountForm!: any;
    utilityClass: UtilityClass = new UtilityClass();
    constructor(private patientService: PatientService
        , private sharedService: SharedService
        , public toastr: ToastrService
        , private _route: ActivatedRoute
        , private router: Router
        , public storage: LocalStorageService
        , public translate: TranslateService
    ) {

    }
    ngOnChanges(changes: SimpleChanges) {
        if (this.birthDateInfo && this.birthDateInfo.birthDateType) {
            this.selectDiseredDate(this.birthDateInfo.birthDateType);
        }
    }

    ngOnInit(): void {

        this.subscription = this.patientService.notifyObservable$.subscribe((res: any) => {
            if (res.hasOwnProperty('option') && res.option === 'call_child') {
                this.birthDateInfo = res.value;
                this.isHagri();
                this.isGregorian();
            }
        });
        this.hagriDays = [];
        let HagriDay: number = 0; while (this.hagriDays.push(++HagriDay) < 30);
        this.gregorianDays = []; let gregorianDay = 0; while (this.gregorianDays.push(++gregorianDay) < 31);
        this.hagriYears = []; let HagriYear = 1318; while (this.hagriYears.push(++HagriYear) < 154);
        this.gregorianYears = []; let gregorianYear = 1900; while (this.gregorianYears.push(++gregorianYear) < 150);

        this.convertHijriMonthListToArray();
        this.convertGregorianMonthListToArray();
    }

    convertHijriMonthListToArray() {
        this.HijriMonths = [];
        for (var key in HijriMonthList) {
            this.HijriMonths.push(HijriMonthList[key]);
            if (this.HijriMonths.length == 12) break;
        }
    }

    convertGregorianMonthListToArray() {
        this.GregorianMonths = [];

        for (var key in GregorianMonthList) {
            this.GregorianMonths.push(GregorianMonthList[key]);
            if (this.GregorianMonths.length == 12) break;
        }
    }

    selectDiseredDate(selctedDateType: string) {
        if (selctedDateType.toLowerCase() == "hagri") {
            if (this.isDatePartsChanged == true)
                this.CheckIfCurrentBirthDateChanged(this.birthDateInfo);
            this.setHijriValues();

        }
        else {
            if (this.isDatePartsChanged == true)
                this.CheckIfCurrentBirthDateChanged(this.birthDateInfo);
            this.setGregorianValues();
        }
    }

    CheckIfCurrentBirthDateChanged(birthDateInfoChaned: any) {
        let thisComponent = this;
        thisComponent.isDatePartsChanged = false;
        this.patientService.checkIfCurrentBirthDateChanged(birthDateInfoChaned)
            .subscribe(
                function (response: any) {
                    thisComponent.birthDateInfo = response;
                    if (thisComponent.birthDateInfo.birthDateType == "Hagri")
                        thisComponent.setGregorianValues();
                    else
                        thisComponent.setHijriValues();
                },
                function (error: any) {
                   thisComponent.toastr.error(error.error);
                    thisComponent.showProgress = false;
                },
                function () {
                    thisComponent.showProgress = false;
                });

    }

    isHagri(): boolean {

        return this.birthDateInfo && this.birthDateInfo.birthDateType && (this.birthDateInfo.birthDateType == 1 || this.birthDateInfo.birthDateType == "Hagri");
    }

    isGregorian(): boolean {

        return this.birthDateInfo && this.birthDateInfo.birthDateType && (this.birthDateInfo.birthDateType == 2 || this.birthDateInfo.birthDateType == "Gourgian");
    }

    isDateChanged(dateValue: any, dateId: any) {
        if (dateId == "ddlDays") {
            this.birthDateInfo.dayValue = dateValue;
            this.isDatePartsChanged = true;
        }
        else if (dateId == "ddlMonths") {
            let tempValue = this.birthDateInfo.birthDateType == 1 ? HijriMonthList[dateValue] : GregorianMonthList[dateValue];
            this.birthDateInfo.monthValue = tempValue;
            this.isDatePartsChanged = true;

        }
        else if (dateId == "ddlYears") {
            this.birthDateInfo.yearValue = dateValue;
            this.isDatePartsChanged = true;

        }
        this.onNewDateSaved.emit(this.birthDateInfo);
    }

    setHijriValues() {

        this.selctedDaysType = this.hagriDays;
        this.selctedMonthsType = this.HijriMonths;
        this.selctedYearsType = this.hagriYears;
        this.birthDateInfo.birthDateType = 1;
        this.isHagri();
        if (this.birthDateInfo.hijriBirthDate != undefined) {
            this.HagriDateValues = new Date(this.birthDateInfo.hijriBirthDate);
            this.birthDateInfo.dayValue = this.HagriDateValues.getDate();
            let month = this.HagriDateValues.getMonth();
            this.birthDateInfo.monthValue = HijriMonthList[month + 1];
            this.birthDateInfo.yearValue = this.HagriDateValues.getFullYear();
        }
    }

    setGregorianValues() {
        this.selctedDaysType = this.gregorianDays;
        this.selctedMonthsType = this.GregorianMonths;
        this.selctedYearsType = this.gregorianYears;
        this.birthDateInfo.birthDateType = 2;
        this.isGregorian();
        if (this.birthDateInfo.birthDate != undefined) {
            this.GregorianDateValues = new Date(this.birthDateInfo.birthDate);
            this.birthDateInfo.dayValue = this.GregorianDateValues.getDate();
            let month = this.GregorianDateValues.getMonth();
            this.birthDateInfo.monthValue = GregorianMonthList[month + 1];
            this.birthDateInfo.yearValue = this.GregorianDateValues.getFullYear();

        }

    }
}


















