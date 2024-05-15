import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './userregistration.component.html',
  styleUrl: './userregistration.component.css'
})
export class UserregistrationComponent {
    canExit(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
       if(this.userRegForm.value.fullName !=='' || this.userRegForm.value.email !== '' )
        {
          return window.confirm('Would like to leave the registraion form?')
          //return false;
        }
        else
        return true;
    }



  

constructor(private fb:FormBuilder){}
  onRegister() {
    if(this.userRegForm.valid)
      {
console.log(this.userRegForm.value)}
// TODO: send the user reg details to service -> api
else{
  console.log('Invalid input');
  
}
}

// userRegForm = new FormGroup({
//   fullName: new FormControl('',Validators.required),
//   email:new FormControl('',[Validators.required,Validators.email]),
//   password:new FormControl('',Validators.required),
//   confirmPassword:new FormControl('',Validators.required)
// });

userRegForm = this.fb.group({
  fullName: ['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  password:['',Validators.required],
  confirmPassword:['',Validators.required]
})
}
