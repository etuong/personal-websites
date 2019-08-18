import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = [];

  constructor() { }

  ngOnInit() {
    this.populateBlogs();
  }

  populateBlogs(): void {

    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      this.blogs.push({
        title: 'A quick study on Computer Vision',
        dest: 'Tracking and Spatial Pyramid Matching',
        text: 'Computer vision is an interdisciplinary field that deals with how computers can be made for gaining high-level understanding from digital images or videos. Computer vision tasks include methods for acquiring, processing, analyzing and understanding digital images, and extraction of high-dimensional data from the real world in order to produce numerical or symbolic information',
        post: 'computerVision'
      });

      this.blogs.push({
        title: 'A quick study on Finite Element',
        dest: 'Stress Analysis on Membrane',
        text: 'Maximum shear stress occurs at the extreme values, namely at the boundaries. Furthermore greater max stress occurs at the end of the minor axis of the ellipse. Stress along the two axes of the centerlines is symmetrical due to the geometric symmetry of the membrane. This is expected since the heaviest concentration is the middle and distributed evenly across the membrane.',
        post: 'finiteElement'
      });

      this.blogs.push({
        title: 'A quick study on Numerical Analysis',
        dest: 'Chaos Theory',
        text: 'Chaos theory is a field of study in mathematics that concerns the behavior of dynamical systems with sensitive initial conditions. It is based on the notion that a small difference in initial conditions such as loss of significance and rounding errors can cause diverging outcomes to the system (deterministic or stochastic), thus rendering it predictable in the long term',
        post: 'numericalAnalysis'
      });

      this.blogs.push({
        title: 'A quick study on Windows Presentation Foundation',
        dest: 'Model-View-ViewModel',
        text: 'Windows Presentation Foundation (or WPF) is a graphical subsystem by Microsoft for rendering user interfaces in Windows-based applications. In my coding career I worked with this technology. This page provides a mini ',
        post: 'wpf'
      });
    }

    this.blogs.push({
      title: 'Climbing the Rooftop of the World',
      dest: 'Beijing, China',
      text: 'China was a very interesting experience. I haven\'t gone abroad in over 6 years before this! Last time I traveled abroad was in 2011 to Germany and it felt like an eternity. China has a very rich history with many areas to explore.',
      post: 'china'
    });
    
    this.blogs.push({
      title: 'One Big Chinatown, One Beautiful Skyline',
      dest: 'Hong Kong, China',
      text: 'I found communication in Hong Kong to be very difficult for me as I only speak a little Cantonese. Thankfully, I had my friend to show me around. She took me to dim sum, where I learned that you have to wash your utensils and cups with the tea provided.',
      post: 'hongkong'
    });

    this.blogs.push({
      title: 'Fusion of European and Asian Influence',
      dest: 'Macau, China',
      text: 'Macau is only an hour away from Hong Kong via ferry. The ride is really cheap ~$450 HKD which equates to about $30 USD for a round trip. The country has its own currency but you can also use Hong Kong dollars. Since it\'s a major destination for tourists',
      post: 'macau'
    });

    this.blogs.push({
      title: 'The Magical Kingdom of Beer and Wurst',
      dest: 'Munich, Germany',
      text: 'I’m not much of a drinker, but I don’t get drunk easily. I forced myself to down the whole thing as a symbol of my masculinity. By the time I was done my head was spinning, and it was only 11:00 AM!',
      post: 'munich'
    });

    this.blogs.push({
      title: 'Internship and Adventure in New Zealand!',
      dest: 'North and South Island, New Zealand',
      text: 'On the night of June 20, 2010 I knew my life wasn\'t going to be the same for a few months. I knew that something tickled my twinkle and I couldn’t rest. The following day, I embarked on a brand-new journey to find myself',
      post: 'newzealand'
    });

    this.blogs.push({
      title: 'Exploring the Bohemian Empire',
      dest: 'Prague, Czech Repulblic',
      text: 'This clock (using astronomy) predicted the Prague flood in 2002, this reminded me of the octopus that predicted the world cup a few years back. Old Town is very lively with music entertainment',
      post: 'prague'
    });

    this.blogs.push({
      title: 'Live Like a Roman and Fight the Tempest!',
      dest: 'Rome, Italy',
      text: 'I felt magnificent, like a gladiator fighting for his life. It wasn’t until we got to the stadium that we looked at each other for the first time and acknowledged each other',
      post: 'rome'
    });

    this.blogs.push({
      title: 'Prosperous Tiger Growling in Southeast Asia',
      dest: 'Singapore',
      text: 'The Esplanade is the Singaporean version of the Sydney Opera House, and this performing arts venue looks like a durian, an exotic fruit from Southeast Asia.',
      post: 'singapore'
    });

    this.blogs.push({
      title: 'The Darling City of Australia',
      dest: 'Sydney, Australia',
      text: 'Henry Miller once said that “one’s destination is never a place, but a new way of seeing things.” I, too, agree with this, in the sense that traveling and being exposed',
      post: 'sydney'
    });

    this.blogs.push({
      title: 'Melting Pot of North America',
      dest: 'Toronto, Canada',
      text: 'Toronto also has some of the biggest and best malls I\'ve ever been to, namely Eaton Mall across Yonge and Dunedas street. The buskers there are so different and amazing as well',
      post: 'toronto'
    });

    this.blogs.push({
      title: 'America, Land of Freedom and Opportunity',
      dest: 'United States of America',
      text: 'I traveled with a photographer\'s mindset, and I always strive to get that "postcard" photo. One of the things I love to do when I travel is visit a gift shop to get inspirations',
      post: 'usa'
    });

    this.blogs.push({
      title: 'Imperial Sights, Coffee Houses',
      dest: 'Vienna, Austria',
      text: 'the country has a very nice policy regarding to unemployment. If you work for a company for more than 6 months, quit, and can’t find another job, the government gives you a fancy stipend',
      post: 'vienna'
    });

    this.blogs.push({
      title: 'Visiting the Ghetto and Exploring Warsaw',
      dest: 'Warsaw, Poland',
      text: 'The Germans opened fire first and killed 15 Polish soldiers but the Polish retaliated and killed around a hundred Nazis. The following day we went to the Malbork',
      post: 'warsaw'
    });
 
  }


}
