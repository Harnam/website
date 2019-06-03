import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.container-fluid').css('height', document.documentElement.clientHeight);
    $('.bottom').css('width', 0.92 * document.documentElement.clientWidth);
    $(window).resize(function () {
      $('.container-fluid').css('height', document.documentElement.clientHeight);
      $('.bottom').css('width', 0.92 * document.documentElement.clientWidth);
    });
  }

}
