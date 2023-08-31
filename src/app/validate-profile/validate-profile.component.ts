import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from 'src/app/UserModel';
import { GlobalServiceService } from 'src/app/services/global-service.service';
import { AllServicesService } from '../services/all-services.service';


@Component({
  selector: 'app-get-profile',
  templateUrl: './validate-profile.component.html',
  styleUrls: ['./validate-profile.component.css']
})
export class ValidateProfileComponent implements OnInit {
   
  loginForm!: FormGroup;
  submitted: boolean = false;

  profileData: any;

  constructor(
    private formBuilder: RxFormBuilder,
    private globalService: GlobalServiceService,
    private allservicesservice: AllServicesService
  ) {}

  ngOnInit(): void {
    this.fetchProfile();
    this.loginForm = this.formBuilder.group({
      firstNameFurigana: ['', [Validators.required]],
      firstNameKanji: ['', [Validators.required]],
      lastNameFurigana: ['', [Validators.required]],
      lastNameKanji: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
    });
  }
 

  userupdate() {
    this.submitted = true;
  if (this.loginForm.valid) {

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
          }
        });
      } else {
        alert('Please fill in at least one field.');
      }   

  }  
      
    
  }

  fetchProfile(): void {
    this.allservicesservice.getProfile().subscribe({
      next: (response: any) => {
        this.profileData = response;
        this.loginForm.patchValue(this.profileData.data);
      },
      error: (error) => {
        console.error('An error occurred:', error);
      }
    });
  }
}
