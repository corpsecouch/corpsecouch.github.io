import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Book }           from '../data/book';

@Injectable()

export class GoodreadsService {

  private server:string = 'https://api-skullnbones.rhcloud.com/';
  private currentEndpoint:string = 'goodreads/current';
  private readEndpoint:string = 'goodreads/read';

  constructor(private http:Http){
    console.log('GoodreadstService::constructor');
  }

  public getReadBooks():Observable<any> {
    console.log('GoodreadsService::getReadBooks');
    return this.http
      .get(this.server + this.readEndpoint)
      .map((res:Response) => {
        let data = res.json();
        return data.data as Book[];
      })
      .catch(this.handleError);
  }

  public getCurrentBook():Observable<any> {
    console.log('GoodreadsService::getCurrentBook');
    return this.http
      .get(this.server + this.currentEndpoint)
      .map((res:Response) => {
        let data = res.json();
        return (data.data || {}) as Book;
      })
      .catch(this.handleError);
  }

  private handleError(err:Response | any):Observable<any> {
    console.error('GoodreadsService::handleError');
    console.error(err);
    return Observable.throw(err.message);
  }
}
