import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ciiService {

  public url: string = environment.uri.api.postgres;

  constructor(private httpClient: HttpClient) {

  }

  getSchemes(): Observable<any> {
    return fromFetch(`${this.url}/cii/GetSchemes`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET'
    }).pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message })
      })
    );
  }

  getDetails(scheme: string, id: string): Observable<any> {
    const url = `${this.url}/cii/${scheme}?&companyNumber=${id}`;
    return this.httpClient.get(url);
  }

  getOrgs(id: string) {
    const url = `${this.url}/cii/GetOrgs?id=${id}`;
    return this.httpClient.get(url);
  }

  getIdentifiers(orgId: string, scheme: string, id: string) {
    const url = `${this.url}/cii/GetIdentifiers/?orgId=${orgId}&scheme=${scheme}&id=${id}`;
    return this.httpClient.get(url);
  }

  updateOrganisation(json: string | null): Observable<any> {
    const body = JSON.parse(json + '');
    const url = `${this.url}/cii/add-scheme`;
    return this.httpClient.put(url, body);
  }

  deleteScheme(orgId: string, scheme: string, id: string): Observable<any> {
    const url = `${this.url}/cii/delete-scheme?orgId=${orgId}&scheme=${scheme}&id=${id}`
    return this.httpClient.delete(url);
  }

}
