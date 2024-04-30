import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioHeaderComponent } from './components/portfolio-header/portfolio-header.component';
import { PortfolioAboutMeComponent } from '../../src/app/components/portfolio-about-me/portfolio-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioAboutMeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
