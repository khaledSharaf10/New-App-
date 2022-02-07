import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  constructor(private service: NewapiservicesService) {}

  topTechDisplay: any = [];
  ngOnInit(): void {
    this.service.techHeading().subscribe((result) => {
      this.topTechDisplay = result.articles;
    });
  }
}
