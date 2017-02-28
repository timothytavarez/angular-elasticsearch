import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
query: string
  constructor() {

  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

}
