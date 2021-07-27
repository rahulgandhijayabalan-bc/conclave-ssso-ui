import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';

import { UserListResponse } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WrapperOrganisationService {
  url: string = `${environment.uri.api.isApiGateWayEnabled ?
    environment.uri.api.wrapper.apiGatewayEnabled.organisation : environment.uri.api.wrapper.apiGatewayDisabled.organisation}`;

  private options = {
    headers: new HttpHeaders(),

  }

  constructor(private http: HttpClient) {
  }

  getUsers(organisationId: string, searchString: string, currentPage: number, pageSize: number, includeSelf: boolean = false): Observable<any> {
    pageSize = pageSize <= 0 ? 10 : pageSize;
    const url = `${this.url}/${organisationId}/user?currentPage=${currentPage}&pageSize=${pageSize}&searchString=${searchString}&includeSelf=${includeSelf}`;
    return this.http.get<UserListResponse>(url, this.options).pipe(
      map((data: UserListResponse) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
  }

  updateOrgRoles(ciiOrgId: string, json: string | null): Observable<any> {
    const body = JSON.parse(json + '');
    // return ajax({
    //   url: `${this.url}/${ciiOrgId}/updateEligableRoles`,
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + this.authService.getAccesstoken(),
    //   }, 
    //   body: body
    // });
    return this.http.put<any>(`${this.url}/${ciiOrgId}/updateEligableRoles`, body, this.options).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
  }
}