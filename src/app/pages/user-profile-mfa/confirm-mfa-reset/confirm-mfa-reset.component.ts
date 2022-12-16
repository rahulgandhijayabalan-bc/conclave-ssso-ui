import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SessionStorageKey } from 'src/app/constants/constant';
import { MFAService } from 'src/app/services/auth/mfa.service';

@Component({
  selector: 'app-confirm-mfa-reset',
  templateUrl: './confirm-mfa-reset.component.html',
  styleUrls: ['./confirm-mfa-reset.component.scss'],
})
export class ConfirmMfaResetComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mfaService: MFAService
  ) {}

  public decodedData: any = { };
<<<<<<< HEAD

  ngOnInit(): void {
=======
  isOrgAdmin: boolean = false;

  ngOnInit(): void {
    this.isOrgAdmin = JSON.parse(localStorage.getItem('isOrgAdmin') || 'false');
>>>>>>> 0ff47456a2e9ef3aa060a26b6dddf8584fa5cd95
    this.route.queryParams.subscribe((para: any) => {
      let RouteData = JSON.parse(atob(para.data));
      this.decodedData = RouteData;
    });
  }

  public navigateTosuccess(): void {
    this.mfaService
      .sendResetMFANotification(this.decodedData.data)
      .toPromise()
      .then(() => {
        this.router.navigateByUrl(
          'user-mfa-reset-success?data=' +btoa(JSON.stringify(this.decodedData))
        );
      })
      .catch((error: any) => {
        this.router.navigateByUrl(
          'user-mfa-reset-success?error=' + +btoa(JSON.stringify(this.decodedData))
        );
      });
  }

  public OnCancel():void {
    window.history.back();
  }
}
