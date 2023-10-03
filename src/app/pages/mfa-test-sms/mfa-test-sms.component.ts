import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
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
    selector: 'app-mfa-test-sms',
    templateUrl: './mfa-test-sms.component.html',
    styleUrls: ['./mfa-test-sms.component.scss'],
    animations: [
        slideAnimation({
            close: { 'transform': 'translateX(12.5rem)' },
            open: { left: '-12.5rem' }
        })
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MfaTestSmsComponent extends BaseComponent implements OnInit {
    
auth0token: string = "";
oob_code: any;    
qrCodeStr: string = "";
phone: string = "";

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
        // this.route.queryParams.subscribe(params => {
        //     if (params['code']) {
        //         this.authService.mfatoken(params['code']).toPromise().then((tokenInfo: TokenInfo) => {
        //             debugger;
        //             //  let idToken = this.tokenService.getDecodedToken(tokenInfo.id_token);
        //             // let accessToken = this.tokenService.getDecodedToken(tokenInfo.access_token);
        //             this.auth0token = tokenInfo.auth0_access_token;
        //         }, (err) => {
        //             if (err.status == 404) {
        //                 this.router.navigateByUrl('error?error_description=USER_NOT_FOUND');
        //             }
        //             else if (err.error == 'INVALID_CONNECTION') {
        //                 this.router.navigateByUrl('error?error_description=INVALID_CONNECTION');
        //             }
        //             else if (err.error == 'MFA_NOT_VERIFIED') {
        //                 this.router.navigateByUrl('error?error_description=PENDING_MFA_VERIFICATION');
        //             }
        //             else {
        //                 // this.authService.logOutAndRedirect();
        //             }
        //         });
        //     }
        //     else if (params['error']) {
        //         let error = params['error'];
        //         if (error == 'login_required') {
        //             this.authService.logOutAndRedirect();
        //         }
        //         else if (error = 'unauthorized') {
        //             //go to error page
        //             let errorMessage = params['error_description'];
        //             this.router.navigateByUrl('error?error_description=' + errorMessage);
        //         }
        //     }
        // });
        // this.route.fragment.subscribe((fragment: string) => {
        //     console.log("My hash fragment is here => ", fragment)
        // })
    }

    sendSmsOtp(phone: string){
        debugger;
        this.auth0token = localStorage.getItem('auth_token') ?? '';
        this.authService.Associate(this.auth0token, phone, true).subscribe({
            next: (response) => {
            debugger;
              console.log(response);
  
              this.oob_code = response.oob_Code;
            //   this.qrCodeStr = response.barcode_Uri;
              window.location.href = "http://localhost:4200/mfatestsmssuccess?code=" + response.oob_Code;
            },
            error: () => console.log("Error"),
          });
    }
}
