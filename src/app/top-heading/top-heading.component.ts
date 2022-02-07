import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css'],
})
export class TopHeadingComponent implements OnInit {
  constructor(private service: NewapiservicesService) {}

  // display data

  topHeadingDisplay: any = [];
  ngOnInit(): void {
    this.service.topHeading().subscribe((result) => {
      // console.log(result);
      this.topHeadingDisplay = result.articles;
    });
  }
}
