import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  get phone(): any {
    return this.loginForm.controls.phone;
  }

  constructor(
    private modalCtr: ModalController,
    private readonly fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      phone: [''],
      capcode: ['']
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { phone, capcode } = this.loginForm.value;
      console.log(phone, capcode);
    }
  }

  handleClose() {
    this.modalCtr.dismiss();
  }

}
