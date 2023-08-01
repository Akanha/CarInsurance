import { Component } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  car:Car=new Car()
  constructor(private service:CarService,private route:Router){}
  src:string=""


  ngOnInit():void{
    this.service.list().subscribe(d=> {
      this.car=d[0]
      this.src=this.car.src
      // console.log(this.car)
    })


  }
  getPre(){
    this.route.navigate(['/list/premium'])
  }
}
