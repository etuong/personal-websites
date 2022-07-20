import { Component, OnInit } from "@angular/core";
import { Service } from "./service";
import { Skill } from "./skill";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  skills: Skill[] = [];

  constructor() {}

  ngOnInit() {
    this.populateServices();
    this.populateSkills();
  }

  populateServices(): void {
    this.services.push({
      delay: 300,
      icon: "fa-chalkboard-teacher",
      title: "Teaching",
      text: "I have 5 years of teaching experiences ranging from high school calculus to college differential equations",
    });
    this.services.push({
      delay: 600,
      icon: "fa-camera",
      title: "Photography",
      text: "I specialized in bright high contrast photography with proficient knowledge in Adobe suites including Photoshop and Premiere",
    });
    this.services.push({
      delay: 900,
      icon: "fa-code",
      title: "Coding",
      text: "I write maintainable, deliverable, and scalable software in C++, Java, and Python for desktop, web, and mobile",
    });
  }

  populateSkills(): void {
    this.skills.push({
      name: "MATLAB",
      percentage: 80,
    });
    this.skills.push({
      name: "HTML",
      percentage: 90,
    });
    this.skills.push({
      name: "CSS",
      percentage: 80,
    });
    this.skills.push({
      name: "JavaScript",
      percentage: 55,
    });
    this.skills.push({
      name: "C++",
      percentage: 65,
    });
    this.skills.push({
      name: "Java",
      percentage: 85,
    });
    this.skills.push({
      name: "Python",
      percentage: 60,
    });
    this.skills.push({
      name: "XML/XSL",
      percentage: 80,
    });
    this.skills.push({
      name: ".NET",
      percentage: 80,
    });
    this.skills.push({
      name: "Angular",
      percentage: 55,
    });
    this.skills.push({
      name: "WPF",
      percentage: 80,
    });
    this.skills.push({
      name: "Photoshop",
      percentage: 70,
    });
  }
}
