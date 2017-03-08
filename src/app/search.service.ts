import { Injectable } from '@angular/core';
import * as elasticsearch from 'elasticsearch';

@Injectable()
export class SearchService {
  host: string;
  log: string;

  constructor() {
    this.host = 'http://search-unifier-backend-7ukbssnzsrg4e54exrkr2j637q.us-west-2.es.amazonaws.com',
    this.log = 'trace'
  }

  query(q: string) {

    let client = new elasticsearch.Client({
      host: this.host,
      log: this.log
    });

    client.search({
      q: q
    }).then(body => {
      return body.hits;
    })
  }

}
