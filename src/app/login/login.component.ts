import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { repeat, retry } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag = false
  cred:User = new User()
  fetched:User = new User();

  constructor(private service:AuthService,private router:Router){}

  authenticate(){
   this.service.validate(this.cred).then(resp => resp.subscribe((data) => {
    if(data.length>0){
      this.fetched = data[0];
      localStorage.setItem("email",this.cred.email)
      console.log(typeof(this.fetched));

      if(this.cred.email == this.fetched.email && this.cred.password==this.fetched.password){
        if(data.length>0){
        console.log("aagaya")
        this.router.navigate(['/dashboard'])
        alert("Your Login was Successful ")
       }
      }
      }
       else{
        alert("Unsuccessful Login")
        this.router.navigate(["/login"])
        console.log("nahi aya")
       }
  }))
}
}
