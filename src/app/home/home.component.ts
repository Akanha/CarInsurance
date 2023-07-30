import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reg:Car=new Car()
  compare:Car=new Car()
  ngOnInit(){
    localStorage.clear()
  }
  constructor( private route:Router,private service:CommonService){}
  next(){
    this.service.fetchRegNo(this.reg).subscribe((d)=>{this.compare=d[0]
      console.log(this.compare)
      localStorage.setItem("regNo",this.reg.regNo);
      if(this.reg.regNo==this.compare.regNo){
        this.route.navigate(["/list"])
        // this.route.navigate(["/list/premium"])
      }
      else{

      }
  });



  }

}
