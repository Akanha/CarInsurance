import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private static baseUrl:string="http://localhost:3000";

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Car[]>(CarService.baseUrl+"/car?regNo="+localStorage.getItem("regNo"));
  }

  login(){

  }
}
