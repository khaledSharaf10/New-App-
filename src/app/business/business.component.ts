import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  constructor(private service: NewapiservicesService) {}

  topBusinessDisplay: any = [];
  ngOnInit(): void {
    this.service.getBusniess().subscribe((result) => {
      this.topBusinessDisplay = result.articles;
    });
  }
}
