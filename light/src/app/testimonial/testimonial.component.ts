import { Component, OnInit } from '@angular/core';
import { Testimonial } from './testimonial'

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor() { }

  ngOnInit() {
    this.populateTestominials();
  }

  populateTestominials(): void {
    this.testimonials.push({
      message: 'I have had the pleasure of working with Ethan at Michael Baker International. Ethan\'s responsibilities included creating desktop application windows from scratch and conducting code review for his peers.  He would consistently meet the budget of his tasks and never backed down from any unprecedented challenge.  However, what made him stand out in the team was his unsatiable desire to learn and better his skills. His curiosity has helped the team find creative and innovative solutions and his fine attention to small details minimized our reworks.  It is with good faith that I recommend Ethan to any company, I am sure he will prove to be an asset as he had in my team.',
      person: 'Neil Patel',
      title: 'Software Engineer at Microsoft Corporation'
    });

    this.testimonials.push({
      message: 'Ethan is super friendly and always helpful when we ask him questions. This was easily my favorite class this semester. I loved the positive environment, and I was even inspired to change my major by this class.  Thank you, Ethan! :)',
      person: 'Caitlyn G.',
      title: 'Student at University of Pittsburgh, MATH 0125, Business Calculus'
    });

    this.testimonials.push({
      message: 'Ethan is an incredibly talented photographer. I had the pleasure of working with him on my wedding day and let me just say that it was so much fun and the pictures turned out amazing! It was such a joyful experience to have his service on my very special day.',
      person: 'Alice Carr',
      title: 'UCSD Faculty Assistant'
    });
  }
}
