import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from 'src/app/components/base/base.component';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { UIState } from 'src/app/store/ui.states';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ciiService } from 'src/app/services/cii/cii.service';
import { UserService } from 'src/app/services/postgres/user.service';
import { OrganisationService } from 'src/app/services/postgres/organisation.service';
import { contactService } from 'src/app/services/contact/contact.service';
import { ContactType } from 'src/app/models/contactDetail';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { WrapperOrganisationService } from 'src/app/services/wrapper/wrapper-org-service';
import { WrapperUserService } from 'src/app/services/wrapper/wrapper-user.service';
import { ViewportScroller } from '@angular/common';
import { ScrollHelper } from 'src/app/services/helper/scroll-helper.services';

@Component({
  selector: 'app-org-support-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  animations: [
    slideAnimation({
      close: { 'transform': 'translateX(12.5rem)' },
      open: { left: '-12.5rem' }
    })
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrgSupportSuccessComponent extends BaseComponent implements OnInit {

  public user$!: Observable<any>;
  displayMessage: string = '';

  constructor(private route: ActivatedRoute, protected uiStore: Store<UIState>, protected viewportScroller: ViewportScroller, protected scrollHelper: ScrollHelper) {
    super(uiStore, viewportScroller, scrollHelper);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let changePassword = false;
      let resetMfa = false;
      let changeRole = false;

      this.route.queryParams.subscribe(para => {

        if (para.rpwd != undefined) {
          changePassword = JSON.parse(para.rpwd);
        }

        if (para.rmfa != undefined) {
          resetMfa = JSON.parse(para.rmfa);
        }

        if (para.chrole != undefined) {
          changeRole = JSON.parse(para.chrole);
        }

        this.displayMessage = '';

        if (changeRole) {
          if (changePassword || resetMfa) {
            this.displayMessage = 'You have successfully changed the organisation administrator role.'
          }
          else {
            this.displayMessage = 'You have successfully changed the organisation administrator role for ' + params.id;
            return;
          }
        }

        if (changePassword) {
          this.displayMessage = this.displayMessage + (resetMfa ? ' Password reset email and' : ' Password reset email');
        }

        if (resetMfa) {
          this.displayMessage = this.displayMessage + (changePassword ? ' MFA reset email have been sent to' : ' MFA reset email has been sent to');
        }
        else {
          this.displayMessage = this.displayMessage + ' has been sent to'
        }

        this.displayMessage = this.displayMessage + ' ' + params.id;
      });
    });
  }
}
