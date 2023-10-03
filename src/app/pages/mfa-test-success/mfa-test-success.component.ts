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
    selector: 'app-mfa-test-success',
    templateUrl: './mfa-test-success.component.html',
    styleUrls: ['./mfa-test-success.component.scss'],
    animations: [
        slideAnimation({
            close: { 'transform': 'translateX(12.5rem)' },
            open: { left: '-12.5rem' }
        })
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MfaTestSuccessComponent extends BaseComponent implements OnInit {
public formValue:string ='SMS'
public orgGroup: string = 'SMS';    
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
        this.route.queryParams.subscribe(params => {
            if (params['code']) {
                this.authService.mfatoken(params['code']).toPromise().then((tokenInfo: TokenInfo) => {
                    debugger;
                    //  let idToken = this.tokenService.getDecodedToken(tokenInfo.id_token);
                    // let accessToken = this.tokenService.getDecodedToken(tokenInfo.access_token);
                    this.auth0token = tokenInfo.auth0_access_token;
                    localStorage.setItem('auth_token', this.auth0token);
                    this.getQROtp();
                }, (err) => {
                    if (err.status == 404) {
                        this.router.navigateByUrl('error?error_description=USER_NOT_FOUND');
                    }
                    else if (err.error == 'INVALID_CONNECTION') {
                        this.router.navigateByUrl('error?error_description=INVALID_CONNECTION');
                    }
                    else if (err.error == 'MFA_NOT_VERIFIED') {
                        this.router.navigateByUrl('error?error_description=PENDING_MFA_VERIFICATION');
                    }
                    else {
                        // this.authService.logOutAndRedirect();
                    }
                });
            }
            else if (params['error']) {
                let error = params['error'];
                if (error == 'login_required') {
                    this.authService.logOutAndRedirect();
                }
                else if (error = 'unauthorized') {
                    //go to error page
                    let errorMessage = params['error_description'];
                    this.router.navigateByUrl('error?error_description=' + errorMessage);
                }
            }
        });
        // this.route.fragment.subscribe((fragment: string) => {
        //     console.log("My hash fragment is here => ", fragment)
        // })
    }

   

    public onChange(event: any, additionalIdentifier: any) {
        debugger;
        console.log(event);
      }

    public gotoMfa(event:string){
        console.log("event",event);
        if(event == "SMS"){
            window.location.href = "http://localhost:4200/mfatestsms";
        }
        else{
            window.location.href = "http://localhost:4200/mfatestQrsuccess";
        }
    }

    getQROtp(): any{
        debugger;
        this.auth0token = localStorage.getItem('auth_token') ?? '';
        this.authService.Associate(this.auth0token, "", false).subscribe({
            next: (response) => {
            debugger;
              console.log(response);
  
              //this.oob_code = response.oob_Code;
            //    this.myAngularxQrCode = response.barcode_Uri;
             //this.setQr(response.barcode_Uri);
             localStorage.setItem('qr_code', response.barcode_Uri);
              return response.barcode_Uri;
            },
            error: () => console.log("Error"),
          }
          );
    }
}
