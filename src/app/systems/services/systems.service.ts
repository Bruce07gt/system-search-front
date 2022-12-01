import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sys } from 'src/app/models/sys';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SystemsService {


  baseUrl: String = environment.baseUrl;
  snack: any;

  constructor(private http : HttpClient) { }

findAll():Observable<sys[]> {
  const url = this.baseUrl + "/system";
  return this.http.get<sys[]>(url);
}

findById(id : any):Observable<sys> {
  const url = this.baseUrl + "/system/" + id;
  return this.http.get<sys>(url);
}

delete(id : any):Observable<void> {
  const url = `${this.baseUrl}/system/${id}`;
  return this.http.delete<void>(url);
}

create(system: sys): Observable<sys> {
  const url = this.baseUrl + "/system";
  return this.http.post<sys>(url, system);
}

update(system: sys): Observable<sys> {
  const url = this.baseUrl + "/system/" + system.id;
  return this.http.put<sys>(url, system);
}

message(msg: String): void {
  this.snack.open(`${msg}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 4000
  })
}

}
