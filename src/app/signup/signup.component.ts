import { Component } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  cred:User=new User();
  constructor(private service:AuthService){}
  signup(){
    this.service.signUp(this.cred);
    alert("user created successfully")
  }
}
