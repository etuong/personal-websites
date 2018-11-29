import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TravelComponent } from './travel/travel.component';
import { BlogComponent } from './blog/blog.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SafePipe } from './safe.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ServicesComponent,
    PortfolioComponent,
    TravelComponent,
    BlogComponent,
    TimelineComponent,
    ContactComponent,
    TestimonialComponent,
    SafePipe,
    TruncatePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
