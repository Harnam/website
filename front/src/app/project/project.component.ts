import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  projects: Project[] = [
    {
      name: "M.S.G",
      img: "msg.png",
      des: "A simple offline two player multiplayer sumo wrestling game with character customization.",
      used: "Unity",
      link: [{
        logo: "github",
        title: "Source Code",
        link: "https://github.com/Harnam/SumoGame",
        hid: false
      },
      {
        logo: "amazon",
        title: "Amazon Appstore",
        link: "https://www.amazon.com/Harnam-M-S-G/dp/B077L6M6NL/",
        hid: false
      }],
      back: "#00B1D2FF"
    },
    {
      name: "Creator",
      img: "creator.png",
      des: "A simple platformer created for the Let's Create Jam #2. The player must complete five levels trying to find his origin.",
      used: "Unity",
      link: [
      {
        logo: "youtube",
        title: "Game Trailer",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        hid: false
      }, {
        logo: "amazon",
        title: "Amazon Appstore",
        link: "https://www.amazon.com/Harnam-Creator/dp/B078K55CXH/",
        hid: false
      }],
      back: "#1C1C1BFF"
    },
    {
      name: "X_Plore",
      img: "xplore.png",
      des: "An endless runner in which the player must avoid asteroids while collecting stars, which can then be used to buy different skins.",
      used: "Unity",
      link: [{
        logo: "github",
        title: "Source Code",
        link: "https://github.com/Harnam/X_Plore-Source",
        hid: false
      },
      {
        logo: "amazon",
        title: "Amazon Appstore",
        link: "https://www.amazon.com/Harnam-X_Plore/dp/B078Q8RM9F/",
        hid: false
      }],
      back: "#F2AA4CFF"
    },
    {
      name: "Harnam.in",
      img: "weblogo.png",
      des: "A simple offline two player multiplayer sumo wrestling game with character customization.",
      used: "NodeJs, ExpressJs, AngularJs",
      link: [{
        logo: "github",
        title: "Source Code",
        link: "https://github.com/Harnam/website",
        hid: false
      },{
        logo: "",
        title: "",
        link: "",
        hid: true
      }],
      back: "#2BAE66FF"
    }
  ];

  ngOnInit() {
  }

}
