import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';  
import { Observable }     from 'rxjs/Observable';  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Issue } from './models/issue';

@Injectable()

export class IssueService {
  private formatIssues(response: Response) {
    return response.json().map(obj =>  <Issue>({
      name: obj.user.login,
      title: obj.title,
      message: obj.body
    }))
  };

  issues: Array<Issue>;
    
  constructor(private http: Http) {}

  getIssues(page: number): Observable<Issue[]> {
    let url = 'https://api.github.com/repos/moment/moment/issues?page=' + page;
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    return this.http
                .get(url)
                .map(this.formatIssues)
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}