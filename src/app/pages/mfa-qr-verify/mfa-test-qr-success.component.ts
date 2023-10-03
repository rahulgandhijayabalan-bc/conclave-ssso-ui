import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy, AfterContentInit, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { timeout } from 'rxjs/operators';
import * as _ from 'lodash';

import { BaseComponent } from 'src/app/components/base/base.component';
import { Data } from 'src/app/models/data';
import { dataService } from 'src/app/services/data/data.service';
import { UIState } from 'src/app/store/ui.states';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { TokenInfo } from 'src/app/models/auth';
import { ViewportScroller } from '@angular/common';
import { ScrollHelper } from 'src/app/services/helper/scroll-helper.services';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
    selector: 'app-mfa-test-success',
    templateUrl: './mfa-test-qr-success.component.html',
    styleUrls: ['./mfa-test-qr-success.component.scss'],
    animations: [
        slideAnimation({
            close: { 'transform': 'translateX(12.5rem)' },
            open: { left: '-12.5rem' }
        })
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MfaTestQrSuccessComponent extends BaseComponent implements OnInit, AfterContentInit {
public myAngularxQrCode: any = localStorage.getItem('qr_code');
   
authcode: string ="";
auth0token: string = "";
oob_code: any;    
qrCodeStr: string = "";

constructor(private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        protected uiStore: Store<UIState>,
        private workerService : WorkerService,
        private readonly tokenService: TokenService, protected viewportScroller: ViewportScroller, protected scrollHelper: ScrollHelper
    ) {
        super(uiStore, viewportScroller, scrollHelper);
    }
    ngOnInit() {
   
        // this.route.fragment.subscribe((fragment: string) => {
        //     console.log("My hash fragment is here => ", fragment)
        // })
        this.myAngularxQrCode = localStorage.getItem('qr_code');
    }

    ngDoCheck(){
        // this.sendQROtp();
      }

    ngAfterContentInit(){
        // this.sendQROtp();
    }

   

    // sendQROtp(): any{
    //     debugger;
    //     this.auth0token = localStorage.getItem('auth_token') ?? '';
    //     this.authService.Associate(this.auth0token, "", false).subscribe({
    //         next: (response) => {
    //         debugger;
    //           console.log(response);
  
    //           //this.oob_code = response.oob_Code;
    //            this.myAngularxQrCode = response.barcode_Uri;
    //          //this.setQr(response.barcode_Uri);
    //           return response.barcode_Uri;
    //         },
    //         error: () => console.log("Error"),
    //       }
    //       );
    // }
   
    setQr(barcode: string){
        this.myAngularxQrCode = barcode;
        console.log("this.myAngularxQrCode: " + this.myAngularxQrCode);
    }

    verifyQROtp(otp: string){
        // let otp = form.get('otp')?.value;
        this.auth0token = localStorage.getItem('auth_token') ?? '';
        this.authService.VerifyOTP(otp, this.auth0token, this.qrCodeStr, "QR").subscribe({
    
          next: (response) => {
                console.log(response);
                alert("Otp verified successfully.");
                window.location.href = "http://localhost:4200";
          },
    
          error: () => alert("Error"),
    
        });
    }
}
