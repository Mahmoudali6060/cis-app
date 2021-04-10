import {Component, OnInit , ViewChild , ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import {ClinicService} from '../shared/clinic.service';



@Component({
   
    selector: 'clinic-dashboard',
    templateUrl: 'clinic-dashboard.component.html'
})

export class ClinicDashboardComponent implements OnInit {

    selectDashboardTab: boolean = true;
    model: any = {};
    showProgress: boolean = false;
    clinicId;
    userType: string = '';
    isClinicAdmin: boolean = false;
    options: any;
    lineChartOptions: any;
    barChartOptions: any;
    weekAppointments: any;
    feedbackDoughnutdata;
    visitsBarChartData: any;

    //data = {
    //    labels: [, , , , , , , , , , , , , ,,,,],
    //    datasets: [
    //        {
    //            data: [10, 20, 30, 31, 22, 25, 14, 27, 25, 12, 35, 14, 14, 10, 12, 15, 22, 31],
    //            fill: true,
    //            backgroundColor: '#26a69a',
    //            borderColor: '#26a69a',
    //            radius:2
    //        },
    //    ]
    //};

    //data = {
    //    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August' , 'September' , 'October' , 'November' , 'December'],
    //    datasets: [
    //        {
    //            label: 'My First dataset',
    //            backgroundColor: '#42A5F5',
    //            borderColor: '#1E88E5',
    //            data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 59]
    //        },
    //        {
    //            label: 'My Second dataset',
    //            backgroundColor: '#9CCC65',
    //            borderColor: '#7CB342',
    //            data: [65, 59, 80, 80, 50, 45, 35, 30, 70, 60, 50, 55]
    //        }
    //    ]
    //}
    
    @ViewChild('lineChart') lineChart: any;
    @ViewChild('feedbackDoughnutChart') feedbackDoughnutChart: any;
    @ViewChild('visitsBarChart') visitsBarChart: any;

    public constructor(private clinicService: ClinicService,
        private storage: LocalStorageService,
        public toastr: ToastrService,
        public translate: TranslateService) {

        this.options = {
            title: {
                display: false,
                fontSize: 15
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        //yAxisMinimumInterval: 1,
                        //stepSize: Math.ceil(max / 7)
                    }
                }],
            }
        };

        this.barChartOptions = {
            title: {
                display: false,
                fontSize: 15
            },
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                }],
            }
        };

        this.lineChartOptions = {
            title: {
                display: false,
                fontSize: 15
            },
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: false,
                }],
            }
        };
    }

    ngOnInit(): void {

        let vm = this;
        vm.model = {};
        vm.showProgress = true;
        this.clinicId = this.storage.retrieve("ClinicId");

        this.userType = this.storage.retrieve("UserType");
        if (this.userType == 'ClinicAdmin')
            this.isClinicAdmin = true;

        this.clinicService.getClinicDashboardWrapper(this.clinicId)
            .subscribe(
            function (response:any) {
                vm.model = response;
                vm.fillAppointmentsChart(response:any);
                vm.fillFeedbackChart(response:any);
                vm.fillVisitsandPatientsChart(response:any);

                vm.lineChart.reinit();
                vm.feedbackDoughnutChart.reinit();
                vm.visitsBarChart.reinit();
            },
            function (error:any) { 
                vm.toastr.error(error, '');
                vm.showProgress = false;
            },
            function () {
                vm.showProgress = false;
            });
    }

    fillAppointmentsChart(response:any)
    {
        let labels: string[] = response.weekAppoitment.labels;
        let data: number[] = response.weekAppoitment.data;

        this.weekAppointments = {
            labels: labels,
            datasets: [
                {
                    data: data,
                    fill: false,
                    borderColor: '#4bc0c0',
                    backgroundColor: '#4bc0c0',
                    label: '',
                    radius: 5,
                    hoverRadius: 5
                },
            ]
        };

        // check if the maximum value in the array is smaller than 5 make step size 1 to ignore decimals
        if (Math.max.apply(null, data) < 5)
        {
            this.options = {
                title: {
                    display: false,
                    fontSize: 15
                },
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }],
                }
            };
        }
    }

    fillFeedbackChart(response:any) {
        let replied = this.translate.instant('Replied');
        let pending = this.translate.instant('Pending');

        this.feedbackDoughnutdata = {
            labels: [replied, pending],
            datasets: [
                {
                    data: [response.repliedFeedback, response.pendingFeedback],
                    backgroundColor: [
                        "#36A2EB",
                        "#FF6384",
                    ],
                    hoverBackgroundColor: [
                        "#5db0e8",
                        "#f198aa",
                    ]
                }]
        };
    }

    fillVisitsandPatientsChart(response:any)
    {
        let visitsLabels: string[] = response.visitsInYear.labels;
        let visitsData: number[] = response.visitsInYear.data;
        let patientData: number[] = response.patientsInYear.data;

        this.visitsBarChartData = {
            labels: visitsLabels,
            datasets: [
                {
                    label: this.translate.instant('NoOfVisits'),
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: visitsData
                },
                {
                    label: this.translate.instant('NoOfPatients'),
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: patientData
                }
            ]
        }
    }

   
}