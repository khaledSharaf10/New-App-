import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class NewapiservicesService {
  constructor(private http: HttpClient) {}
  // api key =5b9da45323e1472fa0e9e00f9a447cca

  // top heading news
  topHeadingurl =
    'https://newsapi.org/v2/top-headlines?country=eg&apiKey=5b9da45323e1472fa0e9e00f9a447cca';

  // Top Heading()
  topHeading(): Observable<any> {
    return this.http.get(this.topHeadingurl);
  }

  // Tech url
  techUrl =
    'https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=5b9da45323e1472fa0e9e00f9a447cca';

  // Top Heading()
  techHeading(): Observable<any> {
    return this.http.get(this.techUrl);
  }

  // business url
  busniessUrl =
    'https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=5b9da45323e1472fa0e9e00f9a447cca';

  getBusniess(): Observable<any> {
    return this.http.get(this.busniessUrl);
  }
}
