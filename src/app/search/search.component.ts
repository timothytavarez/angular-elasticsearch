import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
query: string;
resultsText: string = '';

  constructor(public search: SearchService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value.query);

    this.search.query(f.value.query);
  }

}
