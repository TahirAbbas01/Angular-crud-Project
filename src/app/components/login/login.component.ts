import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'; 
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router'; 
import { GlobalServiceService } from 'src/app/services/global-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false; // Define the 'submitted' variable

  constructor(private formbuilder: FormBuilder, private authService: AuthServiceService , private router:Router, private GlobalServiceService : GlobalServiceService ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true; 
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe({
        next: (response: any) => {
          alert("sucessfull");
          
          this.GlobalServiceService.setToken(response.data.token);
          console.log('Login Successful:', response);

          this.router.navigate(['/getprofile']);
        },
        error: (error: any) => {
          console.error('Login Error:', error);
         
        }
      });
    }
  }


}
