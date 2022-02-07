import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { NewapiservicesService } from './service/newapiservices.service';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [AppComponent, TopHeadingComponent, TechComponent, BusinessComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewapiservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
