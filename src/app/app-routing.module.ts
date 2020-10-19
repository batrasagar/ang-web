import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path: 'services', component: ServicesComponent },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'portfolio-details', component: PortfolioDetailsComponent },
  {path: 'pricing', component: PricingComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'testimonials', component: TestimonialsComponent },
  {path: 'blog-single', component: BlogSingleComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
