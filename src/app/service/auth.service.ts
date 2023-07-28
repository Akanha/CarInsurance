import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { Observable, catchError, delay, filter, repeat, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static baseurl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

 async validate(cred: User) {
    return await this.http.get<User>(
      AuthService.baseurl +
      '/user?email=' +
      cred.email +
      '&password=' +
      cred.password
    ).pipe(retry(1));
  }

  signUp(details:User){
    this.http.post(AuthService.baseurl+"/user/",details).subscribe(data=>data=details);
  }
}
