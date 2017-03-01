import { Injectable } from '@angular/core';
import * as elasticsearch from 'elasticsearch';

@Injectable()
export class SearchService {

  constructor() { }

  createClient() {
    let client = new elasticsearch.Client({
      host: 'http://search-unifier-backend-7ukbssnzsrg4e54exrkr2j637q.us-west-2.es.amazonaws.com',
      log: 'trace'
    });

    return client;
  }

  query(q) {
    let client = this.createClient();

    client.search({
      q: q
    }).then(body => {
      console.log(body)
    })
  }

}
