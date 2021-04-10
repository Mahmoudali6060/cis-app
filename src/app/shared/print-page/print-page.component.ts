import {
    Component, ViewEncapsulation,
    Input, Output, OnChanges, ElementRef,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'print-page',
   
    templateUrl: 'print-page.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
    @media screen {
        #printpage, #printpage * {
            display:none;
        }
    }
      @media print {
          body *{
              visibility:hidden;
              background: transparent;
            -webkit-print-color-adjust: exact !important; 
          }
          
          #printpage, #printpage *{
              visibility:visible;
               -webkit-print-color-adjust: exact !important; 
                box-shadow: inset 0 0 0 1000px gold;
          }

          #printpage{
            position:absolute;
            left:0;
            top:0;             
          }
      }
    `]

})
export class PrintComponent implements OnChanges {

    @Input('section') section: string | undefined;
    @Output() sectionChange = new EventEmitter<any>();

    constructor(private ele: ElementRef) {
        if (this.section === undefined)
            this.section = '';
    }

    ngOnChanges(changes: any) {
        if (changes.section && changes.section.currentValue !== undefined
            && changes.section.currentValue !== '') {

        }
    }

    afterPrint() {
        console.log("after print");
        this.ele.nativeElement.children[0].innerHTML = '';
        this.sectionChange.emit('');
        this.section = '';

    }


    printDiv() {

        if (this.section && this.section != undefined && this.section != '') {
            var printContents = document.getElementById(this.section)?.innerHTML;
            var originalContents = document.body.innerHTML;

            if (window) {
                if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                    var popup: any = window.open('', '_blank',
                        'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,'
                        + 'location=no,status=no,titlebar=no');

                    popup.window.focus();
                    popup.document.write('<!DOCTYPE html><html lang="en"><head>  '
                        + ' <meta charset= "utf-8" >'
                        + ' <meta http-equiv="X-UA-Compatible" content="IE=edge" >'
                        + ' <meta name="viewport" content="width=device-width, initial-scale=1" >'
                        //+ '<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" '
                        //+ 'media="screen,print">'
                        + ' <link rel="stylesheet" href="css/font-awesome.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/animate.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/waves.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/layout.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/components.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/plugins.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/common-styles.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/pages.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen,print" >'

                        + ' <link rel="stylesheet" href="css/updatedAce.css" type="text/css" media="screen,print" />'
                        + ' <link rel="stylesheet" href="css/matmix-iconfont.css" type="text/css" media="screen,print" >'

                        + ' <link href="node_modules/ng2-toastr/bundles/ng2-toastr.min.css" rel= "stylesheet" type="text/css" media="screen,print" />'

                        + ' <link href="css/omega/theme.css" rel= "stylesheet" type="text/css" media="screen,print" />'
                        + ' <link href="css/fullcalendar.min.css" rel="stylesheet" type="text/css" media="screen,print" />'
                        + ' <link href="css/primeng.min.css" rel="stylesheet" type="text/css" media="screen,print"/>'
                        + ' <link href="css/quill.snow.css" rel="stylesheet" type="text/css" media="screen,print"/>'

                        + ' <link rel="stylesheet" href="css/Styles-rtl.css" type="text/css" media="screen,print" >'

                        + ' <link href="css/app-style.css" rel="stylesheet" type="text/css" media="screen,print" />'
                        + ' </head><body direction="rtl" onload="window.print()"><div class="reward-body">'
                        + printContents + '</div></html>');
                    popup.onbeforeunload = function (event: any) {
                        popup.close();
                        return '.\n';
                    };
                    popup.onabort = function (event: any) {
                        popup.document.close();
                        popup.close();
                    }
                } else {
                    var popup: any = window.open('', '_blank', 'width=800,height=600');
                    popup.document.open();
                    popup.document.write('<html><head>' +
                        +' <meta charset= "utf-8" >'
                        + ' <meta http-equiv="X-UA-Compatible" content="IE=edge" >'
                        + ' <meta name="viewport" content="width=device-width, initial-scale=1" >'
                        //+ '<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" '
                        //+ 'media="screen,print">'
                        + ' <link rel="stylesheet" href="css/font-awesome.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/animate.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/waves.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/layout.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/components.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/plugins.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/common-styles.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/pages.css" type="text/css" media="screen,print" >'
                        + ' <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen,print" >'

                        + ' <link rel="stylesheet" href="css/updatedAce.css" type="text/css" media="screen,print" />'
                        + ' <link rel="stylesheet" href="css/matmix-iconfont.css" type="text/css" media="screen,print" >'

                        + ' <link href="node_modules/ng2-toastr/bundles/ng2-toastr.min.css" rel= "stylesheet" type="text/css" media="screen,print" />'

                        + ' <link href="css/omega/theme.css" rel= "stylesheet" type="text/css" media="screen,print" />'
                        + ' <link href="css/fullcalendar.min.css" rel="stylesheet" type="text/css" media="screen,print" />'
                        + ' <link href="css/primeng.min.css" rel="stylesheet" type="text/css" media="screen,print"/>'
                        + ' <link href="css/quill.snow.css" rel="stylesheet" type="text/css" media="screen,print"/>'

                        + ' <link rel="stylesheet" href="css/Styles-rtl.css" type="text/css" media="screen,print" >'

                        + ' <link href="css/app-style.css" rel="stylesheet" type="text/css" media="screen,print" />'
                        + '</head><body direction="rtl" onload="window.print()">' + printContents + '</html>');
                    popup.document.close();
                }

                popup.document.close();
            }
            return true;
        }
        return false;
    }

    //fetchStylesheets() {
    //    var output: string = '';
    //    for (var i = 0; i < document.styleSheets.length; i++) {
    //        output = output + ' <link rel="stylesheet" type="text/css" href="' +
    //            window.document.styleSheets[0].href + '" /> ';
    //    }
    //    return output;
    //}

    //fetchscriptSheets() {
    //    var output: string = '';
    //    for (var i = 0; i < document.scripts.length; i++) {
    //        output = output + ' <script type="text/javascript" src="' +
    //            window.document.scripts[0].src + '" /> ';
    //    }
    //    return output;
    //}

}
