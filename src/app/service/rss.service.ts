import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Rss from '../model/Rss';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(public http:HttpClient) { }
  Url = "https://localhost:7271/api/News";
  GetAllTopics() {
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      const httpOptions = { headers: headers };
    return this.http.get<Rss[]>(this.Url,httpOptions);
  }
}
