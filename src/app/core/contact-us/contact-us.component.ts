import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  isSubmitted = false;
  contactForm: FormGroup;
  dummyObj = {
    name: 'guru', 
    desg: 'Web dev'
  }

  get nameFC(){
    return this.contactForm.controls['name'];
  }
  get emailFC(){
    return this.contactForm.controls['email'];
  }

  constructor(private fb : FormBuilder){
   this.contactForm = this.fb.group({
      name: '',
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      address1: '',
      address2: '',
      city: '',
      state: '',
      pinCode: ['', [Validators.pattern(/([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/)]],
    });
  }
  ngOnInit(): void {
    // this.contactForm.controls['name'].setValue('Guru');
    // this.contactForm.setValue({
    //   name: 'Guru',
    //   email: 'guru@gsstech.in',
    //   address1: 'AWsfadf',
    //   address2: 'daggds',
    //   city: 'adsgsdg',
    //   state: 'dasgasd',
    //   pinCode: '2344',
    // });
  }

  onFormSubmit(){
    if(this.contactForm.valid) {
      alert("Successful");
    }
  }

}
