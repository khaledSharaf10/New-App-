import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { NgxLoadingModule } from 'ngx-loading';
const routes: Routes = [
  { path: '', component: TopHeadingComponent }, //home
  { path: 'Tech', component: TechComponent }, //tech news
  { path: 'Business', component: BusinessComponent }, //business news
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxLoadingModule.forRoot({})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
