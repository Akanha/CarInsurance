import { Component } from '@angular/core';
import { CarService } from '../service/car.service';
import { Router } from '@angular/router';
import { Car } from '../car.model';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent {
  premiums: Car = new Car();

  type: number = 0;

  premium:number =0;



  constructor(private service: CarService, private Router: Router){}
  login(){
    this.Router.navigate(['/loginPremium'])
  }



  premiumCalc(){

    // this.service.persist(this.premium);

    // this.Router.navigate(["list"]);

    this.service.list().subscribe(d=>{

      this.premiums=d[0];

      console.log(this.premiums.cc)
      console.log(this.type)

      if(this.type==1){

        if(this.premiums.cc <1000)

          this.premium = (2094+2094*0.18)*12;

        else if(this.premiums.cc>=1000 || this.premiums.cc<=1500)

          this.premium = (3416+3416*0.18)*12;

        else

          this.premium = (7897+7897*0.18)*12;

      }

      else if(this.type == 3){

        if(this.premiums.cc>1000)

          this.premium = (2094+2094*0.18)*36;

        else if(this.premiums.cc >= 1000 || this.premiums.cc <= 1500)

          this.premium = (3416+3416*0.18)*36;

        else

          this.premium = (7897+7897*0.18)*36;

        }

        else if(this.type==11){

          if(this.premiums.cc<1000)

            this.premium = (2094+2094*0.18)*12;

          else if(this.premiums.cc>=1000 || this.premiums.cc<=1500)

            this.premium = (3416+3416*0.18)*12;

          else

            this.premium = (7897+7897*0.18)*12;

        }

    })



    }

}
