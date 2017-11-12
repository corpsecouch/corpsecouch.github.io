import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Article }           from '../data/article';

@Injectable()

export class MediumService {

  private endpoint:string = 'http://jb-api-jasonbejot.7e14.starter-us-west-2.openshiftapps.com/medium/posts';

  constructor(private http:Http){ }

  public getRecentArticles():Observable<Article[]> {
    return this.http
      .get(this.endpoint)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let data = res.json();
    let rval:Article[] = [];
    data.posts.forEach((elem:any) => {
      rval.push(new Article(elem));
    });
    return rval || [];
  }

  private handleError(err:Response | any):Observable<any> {
    console.error(err);
    return Observable.throw(err.message);
  }
}
