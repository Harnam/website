import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { HttpClient } from '@angular/common/http';
import * as $ from '../../../node_modules/jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: Contact = new Contact();

  constructor(private httpClient: HttpClient) { }

  showsent(){
    console.log("Sent");
    $('button.sendy').html('Sent');
    $('button.sendy').css('background', 'red');
    $('.sendy').attr('disabled','');
  }

  showerror(){
    console.log("Error");
    $('button.sendy').html('Try Again');
    $('button.sendy').removeAttr('disabled');
    $('button.sendy').css('background', 'red');
  }

  formsubmit(){
    if((this.form.name != null) && (this.form.email != null) && (this.form.subject != null) && (this.form.body != null)){
      $('.sendy').attr('disabled', '');
      $('button.sendy').css('background', 'white');
      $('button.sendy').html('<img src="../../assets/gif.gif" height="27px" width="27px">');
      console.log(this.form);
      return this.httpClient.post("http://localhost:3000/send-email", this.form).subscribe((res: any) => {
        if(res.status == "sent"){
          this.showsent();
        } else if(res.status == "error"){
          this.showerror();
        }
        });
    }
  }

  ngOnInit() {
    $('.form-control').css('background-color', '#c1b7a8');
  }

}
