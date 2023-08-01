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
    alert("user created successfully")
    this.router.navigate(['/home'])
    console.log("hello")

  }
}
