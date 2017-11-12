import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Book }           from '../data/book';

@Injectable()

export class GoodreadsService {

  private server:string = 'http://jb-api-jasonbejot.7e14.starter-us-west-2.openshiftapps.com/';
  private currentEndpoint:string = 'goodreads/current';
  private readEndpoint:string = 'goodreads/read';

  constructor(private http:Http){ }

  public getReadBooks():Observable<any> {
    return this.http
      .get(this.server + this.readEndpoint)
      .map((res:Response) => {
        let data = res.json();
        return data.data as Book[];
      })
      .catch(this.handleError);
  }

  public getCurrentBook():Observable<any> {
    return this.http
      .get(this.server + this.currentEndpoint)
      .map((res:Response) => {
        let data = res.json();
        return (data.data || {}) as Book;
      })
      .catch(this.handleError);
  }

  private handleError(err:Response | any):Observable<any> {
    console.error(err);
    return Observable.throw(err.message);
  }
}
