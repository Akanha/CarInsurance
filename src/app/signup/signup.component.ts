import { Component } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  cred:User=new User();
  constructor(private service:AuthService,private router:Router){}
  signup(){
    this.service.signUp(this.cred);
<<<<<<< HEAD
    alert("User Created Successfully")
=======
    alert("user created successfully")
>>>>>>> 0da4df7b6d5b8f1e6719c35854304c598a280ee9
    this.router.navigate(['/home'])
    console.log("hello")

  }
}
