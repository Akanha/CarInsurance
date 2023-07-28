import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static baseurl:string="http://localhost:3000"
  constructor(private http:HttpClient) { }

  validate(cred:User):boolean{
    let user:User = new User();
    this.http.get<User>(AuthService.baseurl+"/user?email="+cred.email+"&password="+cred.password).pipe(retry(2));
    if(user.email==cred.email){
      console.log("name matched");
      return true;
    }
    else{
      console.log("nothing matched")
      return false;
    }
  }
}
