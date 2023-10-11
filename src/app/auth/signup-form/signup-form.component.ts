import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  email: string = 'maranda@gmail.com';
  password: string = 'maranda';
  confirm_password: string = 'maranda';
  passwordMatched: boolean = true;

  constructor() {}

  submit(){
    // if(this.password != this.confirm_password){
    //   this.passwordMatched = false;
    //   return
    // }
    console.log(`started executing!`);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        console.log(`2 started executing!`)
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(`3. started executing!`)
    });

    console.log(`started executing!`)
  }
}
