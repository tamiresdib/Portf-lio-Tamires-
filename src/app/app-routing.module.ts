import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PageRoutes } from './enums/page-routes.enum';
import { PortfolioHeaderComponent } from '../../src/app/components/portfolio-header/portfolio-header.component';
import { PortfolioAboutMeComponent } from '../../src/app/components/portfolio-about-me/portfolio-about-me.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: PageRoutes.HEADER },
  {
    path: PageRoutes.HEADER,
    component: PortfolioHeaderComponent,
    data: { animation: PageRoutes.HEADER },
  },
  {
    path: PageRoutes.ABOUT_ME,
    component: PortfolioHeaderComponent,
    data: { animation: PageRoutes.ABOUT_ME },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
