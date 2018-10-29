import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  results: any;
  constructor(private data: DataService) {}

  onSubmit(value, search): void {
    console.log(value, search);
    this.data
      .getSearch(value, search)
      .subscribe(data => (this.results = data.results));
  }

  ngOnInit() {}
}
