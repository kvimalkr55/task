import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileDetector } from 'selenium-webdriver/remote';
import { RegisterService } from 'src/app/service/register.service';
import { DomSanitizer } from '@angular/platform-browser';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  profileImage: any = '/assets/placeholder.jpg';
  constructor(
    private fb: FormBuilder,
    private regSRV: RegisterService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.initForm();
  }

  private initForm() {
    this.myForm = this.fb.group({
      profilePic: [],
      fName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/[a-z]/g)]],
      lName: ['', Validators.required],
      phone: [''],
      email: [''],
      age: [''],
      state: [''],
      country: [''],
      address: [''],
      hobbies: [''],
      subscribe: ['']
    });
  }

  ngOnInit() {
  }

  private checkImageSize(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        const {
          naturalHeight,
          naturalWidth
        } = img;
        const isOk = (naturalHeight < 325 && naturalWidth < 310);
        resolve(isOk);
      }

    });
  }

  async profilepic(e) {
    const [file] = e.target.files;
    const imageUrl = URL.createObjectURL(file);
    const isOk = await this.checkImageSize(imageUrl);
    if (!isOk) {
      window.alert('Improper Dimesnsions');
      return;
    }
    this.profileImage = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      this.profileImage = reader.result;
    }

  }

  onSubmit(payload) {
    console.log(payload);
    payload.value.profilePic = this.profileImage;
    console.log(payload.value);
    this.regSRV.registration(payload.value)
      .subscribe((sucess:any) => {
        console.log(sucess);
        alert("user created successfully");
        this.router.navigate(['/profile', sucess.id]);
      }, (error) => {
        console.log(error);
      })
  }

}
