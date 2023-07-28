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
  fetched:User=new User()
  got:User=new User();
  constructor(private service:AuthService,private router:Router){}

  authenticate(){
   this.service.validate(this.cred).then(resp => resp.subscribe((data : User) => {
    console.log(data);
    this.fetched=data
     if(this.cred.email == data.email){
      console.log("aagaya")
      this.router.navigate(['/dashboard'])
     }
     else{
      console.log("nahi aya")
     }
   }));

  }

}
