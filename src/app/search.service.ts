import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as elasticsearch from 'elasticsearch';

@Injectable()
export class SearchService {
  host: string;
  log: string;
  responseArr: Array<any>;

  constructor(private http: Http) {
    this.host = 'http://search-unifier-backend-7ukbssnzsrg4e54exrkr2j637q.us-west-2.es.amazonaws.com',
    this.log = 'trace'
  }

  extractData(data) {
    console.log(data);
  }

  getSearchResults(q: string): PromiseLike<any> {
    return this.query(q).then(res => {
      this.extractData(res);
    })
  }

  query(q: string): PromiseLike<any> {

    let client = new elasticsearch.Client({
      host: this.host,
      log: this.log
    });

    return client.search({
      q: q
    }).then(body => {
      return body.hits;
    })

  }

}
