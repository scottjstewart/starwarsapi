import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSearch(value, search): Observable<any> {
    return this.http
      .get(`https://swapi.co/api/${value}/?search=${search}`)
      .pipe(tap(result => console.log(result)));
  }
}
