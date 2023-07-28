import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag=false
  cred:User = new User()
  constructor(private service:AuthService,private router:Router){}

  authenticate(){
    this.flag = this.service.validate(this.cred);
    console.log(this.flag)
    if(this.flag){
      this.router.navigate(['/dashboard'])
    }
  }
}
