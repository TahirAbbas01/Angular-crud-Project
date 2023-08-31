import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false; 
 
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true; 
    if (this.signupForm.valid) {

      const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.authService.signup(email, password).subscribe({
      next: (response: any) => {
        console.log('Signup Successful:', response);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.error('Signup Error:', error);
      },
    });
      
      
    }

    
  }
}
