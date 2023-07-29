import { Component } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  car:Car=new Car()
  constructor(private service:CarService){}


  ngOnInit():void{
    this.service.list().subscribe(d=> {
      this.car=d[0]
      // console.log(this.car)
    })

  }
}
