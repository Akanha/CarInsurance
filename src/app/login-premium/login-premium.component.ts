import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login-premium',
  templateUrl: './login-premium.component.html',
  styleUrls: ['./login-premium.component.css']
})
export class LoginPremiumComponent {
  flag = false
  cred:User = new User()
  fetched:User = new User();

  constructor(private service:AuthService,private router:Router ){}

  authenticate(){
   this.service.validate(this.cred).then(resp => resp.subscribe((data) => {
    if(data.length>0){
    this.fetched = data[0];

      localStorage.setItem("email",this.cred.email)
      console.log(typeof(this.fetched));
       if(this.cred.email == this.fetched.email && this.cred.password==this.fetched.password){
        console.log("aagaya")
        this.router.navigate(['/payment'])
        alert("Successfully loggedin")
       }
      }
       else{
        alert("Invalid details")
        this.router.navigate(["/loginPremium"])
        console.log("nahi aya")
       }
  }))
  }
}
