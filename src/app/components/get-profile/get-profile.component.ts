import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from 'src/app/UserModel';
import { AllServicesService } from 'src/app/services/all-services.service';
import { GlobalServiceService } from 'src/app/services/global-service.service';




@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {
  loginForm!: FormGroup;
  profileData: any;

  // Initialize variables to avoid undefined values
  firstNameFurigana = '';
  firstNameKanji = '';
  lastNameFurigana = '';
  lastNameKanji = '';
  profileImage = '';

  constructor(
    private formBuilder: RxFormBuilder,
    private globalService: GlobalServiceService,
    private allservicesservice:AllServicesService,
    private router : Router
   
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchProfile();
  }

  initForm(): void {
    let user = new User();
    this.loginForm = this.formBuilder.formGroup(user);
  }

  userupdate() {
    
    this.firstNameFurigana = this.loginForm.get('firstNameFurigana')?.value;
    this.firstNameKanji = this.loginForm.get('firstNameKanji')?.value;
    this.lastNameFurigana = this.loginForm.get('lastNameFurigana')?.value;
    this.lastNameKanji = this.loginForm.get('lastNameKanji')?.value;
    this.profileImage = this.loginForm.get('profileImage')?.value;
  
   
    const modifieddata: any = {};
  
   
    const fieldsToCheck = ['firstNameFurigana', 'firstNameKanji', 'lastNameFurigana', 'lastNameKanji', 'profileImage'];
    fieldsToCheck.forEach(field => {
      const value = this.loginForm.get(field)?.value;
      if (value) {
        modifieddata[field] = value;
      }
    });
  
    if (Object.keys(modifieddata).length > 0) {
      this.allservicesservice.updateUserProfile(modifieddata).subscribe({
        next: (response: any) => {
          alert("Profile updated successfully.");
          this.fetchProfile();
          this.loginForm.reset();
        },
        error: (error: any) => {
          console.error('Error updating profile:', error);
          if (error.status === 500) {
            alert('Token has expired. Please log in again.');
           
          }
        }
      });
    } else {
      alert('Please fill in at least one field.');
    }
  }
  
  
  fetchProfile(): void {
    this.allservicesservice.getProfile().subscribe({
      next: (response: any) => {
        this.profileData = response;
        // console.log(this.profileData);
        this.loginForm.patchValue(this.profileData.data);
      },
      error: (error) => {
        console.error('An error occurred:', error);
        if (error.status === 500) {
          alert('Token has expired. Please log in again.');
          this.router.navigate(['/login']);
        }   


      }

    });
  }
}
