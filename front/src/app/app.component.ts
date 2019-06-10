import { Component } from '@angular/core';
import * as $ from '../../node_modules/jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'front';
  public ngOnInit()
  {
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
    function checkScroll(){
      var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
      if($(window).scrollTop() > startY){
        if(document.documentElement.clientWidth > 575){
          $('.navbar').addClass("scrolled");
          $('.navbar').removeClass("bg-dark");
          if($('.connav').hasClass('active')){
            $('.active').css("text-decoration-color", "rgba(255,255,255)");
            $('.nav-link').css("color", "rgba(255,255,255)");
            $('.heada').css("fill", "rgba(255,255,255)");
          } else if($('.abonav').hasClass('active')){
            $('.active').css("text-decoration-color", "rgb(0, 68, 255)");
            $('.nav-link').css("color", "rgb(0, 68, 255)");
            $('.heada').css("fill", "rgb(0, 68, 255)");
          } else if($('.socnav').hasClass('active')){
            $('.active').css("text-decoration-color", "red");
            $('.nav-link').css("color", "red");
            $('.heada').css("fill", "red");
          } else if($('.pronav').hasClass('active')){
            $('.active').css("text-decoration-color", "#FEE715FF");
            $('.nav-link').css("color", "#FEE715FF");
            $('.heada').css("fill", "#FEE715FF");
          }  else if($('.mainav').hasClass('active')){
            $('.active').css("text-decoration-color", "#F95700FF");
            $('.nav-link').css("color", "#F95700FF");
            $('.heada').css("fill", "#F95700FF");
          }
        } else {
          $('.navbar').addClass("bg-dark");
          $('.navbar').removeClass("scrolled");
          $('.nav-link').css("color", "rgba(255,255,255,.5)");
        }
      }else{
        if($('.navbar').hasClass('bg-dark')){
          $('.heada').css("fill", "#F95700FF");
        } else {
          $('.heada').css("fill", "red");
        }
        $('.navbar').addClass("bg-dark");
        $('.navbar').removeClass("scrolled");
        $('.nav-link').css("color", "rgba(255,255,255,.5)");
      }
    }
  
    if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
    }
  }
}
