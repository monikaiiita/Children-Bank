import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { OfferingsComponent } from './home-page/offerings/offerings.component';
import { BlogsComponent } from './home-page/blogs/blogs.component';
import { AnnouncementsComponent } from './home-page/announcements/announcements.component';
import { DealsComponent } from './home-page/deals/deals.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    CarouselComponent,
    OfferingsComponent,
    BlogsComponent,
    AnnouncementsComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
