import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs/docs.component'
import { HomeComponent } from './home/home.component';
import {GithubComponent} from "./github/github.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: GithubComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

