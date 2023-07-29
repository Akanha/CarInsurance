import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { Observable, catchError, delay, filter, repeat, retry } from 'rxjs';
import { Policy } from '../policy.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

 async validate(cred: User) {
    return await this.http.get<User[]>(
      AuthService.baseUrl +
      '/user?email=' +
      cred.email +
      '&password=' +
      cred.password
    ).pipe(retry(1));
  }

  signUp(details:User){
    this.http.post(AuthService.baseUrl+"/user/",details).subscribe(data=>data=details);
  }
  list(){
    return this.http.get<Policy[]>(AuthService.baseUrl+"/policy?email="+localStorage.getItem("email"))
  }
}
