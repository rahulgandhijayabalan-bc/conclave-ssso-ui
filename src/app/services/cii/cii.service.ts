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
    const url = `${this.url}/cii/GetSchemes`;
    return this.httpClient.get(url);
  }

  getDetails(scheme: string, id: string): Observable<any> {
    const url = `${this.url}/cii/${scheme}?&companyNumber=${encodeURIComponent(id)}`;
    return this.httpClient.get(url);
  }

  getOrgs(id: string) {
    const url = `${this.url}/cii/GetOrgs?id=${encodeURIComponent(id)}`;
    return this.httpClient.get(url);
  }

  getIdentifiers(orgId: string, scheme: string, id: string) {
    const url = `${this.url}/cii/GetIdentifiers/?orgId=${encodeURIComponent(orgId)}&scheme=${encodeURIComponent(scheme)}&id=${encodeURIComponent(id)}`;
    return this.httpClient.get(url);
  }

  updateOrganisation(json: string | null): Observable<any> {
    const body = JSON.parse(json + '');
    const url = `${this.url}/cii/add-scheme`;
    return this.httpClient.put(url, body);
  }

  deleteScheme(orgId: string, scheme: string, id: string): Observable<any> {
    const url = `${this.url}/cii/delete-scheme?orgId=${encodeURIComponent(orgId)}&scheme=${encodeURIComponent(scheme)}&id=${encodeURIComponent(id)}`
    return this.httpClient.delete(url);
  }

}
