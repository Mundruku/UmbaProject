import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {JQ_TOKEN} from './shared/jquery.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { FarmersResourcesComponent } from './farmers-resources/farmers-resources.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router'
import {AppRoute } from './router.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    FarmersResourcesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute)


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
