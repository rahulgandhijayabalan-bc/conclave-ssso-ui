import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseComponent } from 'src/app/components/base/base.component';
import { UIState } from 'src/app/store/ui.states';
import { ScrollHelper } from 'src/app/services/helper/scroll-helper.services';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MFAService } from 'src/app/services/auth/mfa.service';


@Component({
  selector: 'mfa-reset-notification',
  templateUrl: './send-mfa-reset-notification.html',
  styleUrls: ['./send-mfa-reset-notification.scss']
})
export class SendMFAResetNotificationComponent extends BaseComponent implements OnInit {
  resetsuccess: boolean = false;
  userName: string = '';

  constructor(private route: ActivatedRoute, private router: Router, protected uiStore: Store<UIState>,
    private mfaService: MFAService,
    private authService: AuthService,
    protected viewportScroller: ViewportScroller, protected scrollHelper: ScrollHelper) {
    super(uiStore, viewportScroller, scrollHelper);
  }

  onNavigateLinkClick() {
    this.authService.logOutAndRedirect();
  }

  ngOnInit() {
    debugger;
    this.route.queryParams.subscribe(para => {
      if (para.success != undefined) {
        this.resetsuccess = true;
      }
      else if (para.error != undefined) {
        this.resetsuccess = false;
      }
      else {
        this.mfaService.sendResetMFANotification( para.u).toPromise().then(() => {
          this.router.navigateByUrl('mfaresetnotification?success&u=' + encodeURIComponent(para.u));
        }).catch((error: any) => {
          this.router.navigateByUrl('mfaresetnotification?error&u=' + encodeURIComponent(para.u));
        });
      }
      this.userName = para.u;
    });
  }
}
