import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../car.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private static baseUrl:string="http://localhost:3000"
  constructor(private http:HttpClient) { }
  fetchRegNo(regNo:Car){
    return this.http.get<Car[]>(CommonService.baseUrl+"/car?regNo="+regNo.regNo);
  }
}
