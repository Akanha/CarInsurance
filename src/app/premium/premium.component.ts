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
  // type1:number=1;
  // type11:number=1;
  // type3:number=1;
  // type13:number=1;
  premium1yr:number =0;
  premium3yr:number =0;
  premium1yrThirdParty:number =0;
  premium3yrThirdParty:number =0;



  constructor(private service: CarService, private Router: Router){}
  select1yr(){
    localStorage.setItem("value",JSON.stringify(this.premium1yr));
    this.Router.navigate(['/loginPremium'])

  }
  select1yrThirdParty(){
    localStorage.setItem("value",JSON.stringify(this.premium1yrThirdParty));
    this.Router.navigate(['/loginPremium'])

  }
  select3yr(){
    localStorage.setItem("value",JSON.stringify(this.premium3yr));
    this.Router.navigate(['/loginPremium'])

  }
  select3yrThirdParty(){
    localStorage.setItem("value",JSON.stringify(this.premium3yrThirdParty));
    this.Router.navigate(['/loginPremium'])

  }



  ngOnInit(){



    this.service.list().subscribe(d=>{

      this.premiums=d[0];

      console.log(this.premiums.cc)
      // console.log(this.type)

      if(1){

        if(this.premiums.cc <1000){

          this.premium1yr = (2094+2094*0.18)*12;
          this.premium3yr = (2094+2094*0.18)*36;
          this.premium1yrThirdParty = (2094+2094*0.18)*6;
          this.premium3yrThirdParty = (2094+2094*0.18)*18;

        }

        else if(this.premiums.cc>=1000 || this.premiums.cc<=1500){

          this.premium1yr = (3416+3416*0.18)*12;
          this.premium3yr = (3416+3416*0.18)*36;
          this.premium3yrThirdParty = (3416+3416*0.18)*18;
          this.premium1yrThirdParty = (3416+3416*0.18)*6;


        }

        else{

          this.premium1yr = (7897+7897*0.18)*12;
          this.premium3yr = (7897+7897*0.18)*36;
          this.premium1yrThirdParty=(7897+7897*0.18)*6;
          this.premium3yrThirdParty = (7897+7897*0.18)*18;

        }

        }

    })



    }

}
