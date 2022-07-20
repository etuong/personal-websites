import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServicesComponent } from "./services/services.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TravelComponent } from "./travel/travel.component";
import { BlogComponent } from "./blog/blog.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ContactComponent } from "./contact/contact.component";
import { IntroComponent } from "./intro/intro.component";

const routes: Routes = [
  { path: "", redirectTo: "/intro", pathMatch: "full" },
  { path: "intro", component: IntroComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "services", component: ServicesComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "travel", component: TravelComponent },
  { path: "blog", component: BlogComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
