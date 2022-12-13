import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder) {
    this.initalizeForm();
  }
  initalizeForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      companyEmail: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      isTester: ['', [Validators.required]],
      jobTitle: ['', [Validators.required]],
      comments: ['', [Validators.required]],
      hearAboutUs: ['', [Validators.required]],
    });
  }
  getError(control: string): boolean {
    if ((this.contactForm.controls[control].touched && this.contactForm.controls[control].invalid) || (this.formSubmitAttempt && this.contactForm.controls[control].invalid)) {
      return true;
    }
    return false;
  }
  showErrorMessage(): boolean {
    if (this.formSubmitAttempt && this.contactForm.invalid) {
      return true;
    }
    return false;
  }
  checkValidity(control: string): string {
    if ((this.contactForm.controls[control].touched && this.contactForm.controls[control].invalid) || (this.formSubmitAttempt && this.contactForm.controls[control].invalid)) {
      return 'invalid';
    }
    return 'valid';

  }
  onSubmit() {
    this.formSubmitAttempt = true;
  }
}
