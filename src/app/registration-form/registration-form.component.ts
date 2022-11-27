import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  repeatPass: string = "none";
  constructor(private Router: Router) {

  }
  ngOnInit(): void {

  }
  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    gender: new FormControl("", [Validators.required]),
    pwd: new FormControl("",
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)]),
    rpwd: new FormControl("")
  });
  registerSubmited() {
    if (this.pwd.value == this.rpwd.value) {
      console.log(this.registerForm.valid);
      this.repeatPass = 'none'
      // this.Router.navigate(["logIn"]);
      // console.log("subimtted");
    } else {
      this.repeatPass = 'inline'
    }
  }

  get firstName(): FormControl {
    return this.registerForm.get("firstName") as FormControl;
  }
  get lastName(): FormControl {
    return this.registerForm.get("lastName") as FormControl;
  }
  get email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }
  get gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }
  get pwd(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }
  get rpwd(): FormControl {
    return this.registerForm.get("rpwd") as FormControl;
  }

}
