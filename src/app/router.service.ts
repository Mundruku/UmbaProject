import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FarmersResourcesComponent } from './farmers-resources/farmers-resources.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';


export const AppRoute=[
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'team', component:TeamComponent },
  {path: 'farmers', component:FarmersResourcesComponent},
  {path:'contact', component: ContactComponent},
  {path: "", redirectTo: '/home', pathMatch:'full'}
]
