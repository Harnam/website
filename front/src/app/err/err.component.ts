import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-err',
  templateUrl: './err.component.html',
  styleUrls: ['./err.component.css']
})
export class ErrComponent implements OnInit {

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
