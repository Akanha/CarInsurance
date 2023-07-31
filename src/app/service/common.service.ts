import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../car.model';
import { Policy } from '../policy.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  captured:Policy=new Policy()
  private static baseUrl:string="http://localhost:3000"
  constructor(private http:HttpClient,private router:Router) { }
  fetchRegNo(regNo:Car){
    return this.http.get<Car[]>(CommonService.baseUrl+"/car?regNo="+regNo.regNo);
  }

  policy(details:Policy){
    this.http.post(CommonService.baseUrl+"/policy/",details).subscribe(data=>data=details)
    this.router.navigate(['/dashboard'])
  }
}
