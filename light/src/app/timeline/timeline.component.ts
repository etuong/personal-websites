import { Component, OnInit } from "@angular/core";
import { Story } from "./story";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  stories: Story[] = [];

  constructor() {}

  ngOnInit() {
    this.createTimeline();
  }

  createTimeline(): void {
    this.stories.push({
      icon: "fa-globe-americas",
      badgeColor: "primary",
      title: "America",
      desc:
        "Immigrated to the land of freedom from Vietnam and grew up in central Los Angeles. Favorite sport is football and favorite instrument is piano.",
    });

    this.stories.push({
      icon: "fa-university",
      badgeColor: "danger",
      title: "College",
      desc:
        "Attended University of California, San Diego and majored in Structural Engineering with a minor in Mathematics.",
    });

    this.stories.push({
      icon: "fa-plane",
      badgeColor: "light",
      title: "World Travel",
      desc:
        "Traveled the world including two study abroad programs in Berlin, Germany, and Rome, Italy. Also did an internship on seismic retrofit at the University of Auckland, New Zealand.",
    });

    this.stories.push({
      icon: "fa-graduation-cap",
      badgeColor: "warning",
      title: "Higher Education",
      desc:
        "Attended Carnegie Mellon University to pursue a Master of Science in Computational Mechanics.",
    });

    this.stories.push({
      icon: "fa-code",
      badgeColor: "success",
      title: "Software Engineering",
      desc:
        "Started a career in software development. Dabbled with .NET, Java technology, and web services.",
    });

    this.stories.push({
      icon: "fa-chalkboard-teacher",
      badgeColor: "info",
      title: "Academia",
      desc:
        "Started a teaching career at local universities, taught numerous courses from linear algebra to web design.",
    });

    this.stories.push({
      icon: "fa-directions",
      badgeColor: "secondary",
      title: "Future?",
      desc:
        "Capture the perfect picture in Machu Picchu and Taj Mahal, and engage in business development to advance career.",
    });
  }
}
