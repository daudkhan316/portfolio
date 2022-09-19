import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  getUIDesign() {
    return [
      { image: './assets/images/blog2.png', date: "Nov 23 2023", title: "This is it, UI Design 1", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Nov 23 2023", title: "This is it, UI Design 2", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Nov 23 2023", title: "This is it, UI Design 3", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Nov 23 2023", title: "This is it, UI Design 4", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Nov 23 2023", title: "This is it, UI Design 5", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Nov 23 2023", title: "This is it, UI Design 6", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
    ]
  }

  getUXDesign() {
    return [
      { image: './assets/images/blog1.png', date: "Aug 23 2020", title: "This way, UX Design 1", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Aug 23 2020", title: "This way, UX Design 2", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Aug 23 2020", title: "This way, UX Design 3", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Aug 23 2020", title: "This way, UX Design 4", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Aug 23 2020", title: "This way, UX Design 5", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Aug 23 2020", title: "This way, UX Design 6", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
    ]
  }

  getProductDesign() {
    return [
      { image: './assets/images/blog2.png', date: "Jan 12 2017", title: "This way, Product Design 1", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Jan 12 2017", title: "This way, Product Design 2", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Jan 12 2017", title: "This way, Product Design 3", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Jan 12 2017", title: "This way, Product Design 4", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Jan 12 2017", title: "This way, Product Design 5", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Jan 12 2017", title: "This way, Product Design 6", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
    ]
  }

  getArticles() {
    return [
      { image: './assets/images/blog1.png', date: "Dec 29 2019", title: "Article: Drone Attacks", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Dec 29 2019", title: "Article: Drone Attacks", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Dec 29 2019", title: "Article: Drone Attacks", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Dec 29 2019", title: "Article: Drone Attacks", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Dec 29 2019", title: "Article: Drone Attacks", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Dec 29 2019", title: "Article: Drone Attacks", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
    ]
  }

  getTutorials() {
    return [
      { image: './assets/images/blog2.png', date: "Mar 19 2021", title: "Tutorial: How to cook", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Mar 19 2021", title: "Tutorial: How to cook", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Mar 19 2021", title: "Tutorial: How to cook", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Mar 19 2021", title: "Tutorial: How to cook", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Mar 19 2021", title: "Tutorial: How to cook", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Mar 19 2021", title: "Tutorial: How to cook", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
    ]
  }

  getNews() {
    return [
      { image: './assets/images/blog1.png', date: "Nov 15 2015", title: "News: Flood", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Nov 15 2015", title: "News: Flood", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Nov 15 2015", title: "News: Flood", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Nov 15 2015", title: "News: Flood", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog1.png', date: "Nov 15 2015", title: "News: Flood", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
      { image: './assets/images/blog2.png', date: "Nov 15 2015", title: "News: Flood", description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.", },
    ]
  }

  constructor() { }
}
