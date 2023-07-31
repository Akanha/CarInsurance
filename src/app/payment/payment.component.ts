
import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Policy } from '../policy.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  setpolicy:Policy=new Policy()
  constructor(private service:CommonService){}
  value=localStorage.getItem("value")
  PolicyNo = "CRI"
  actual:string=""
  policyGenerate(){
    let pol = Math.random()*100000
    pol=~~pol
    this.actual=this.PolicyNo+pol;
    localStorage.setItem("policy",this.actual)

    this.setpolicy.email=localStorage.getItem("email")
    this.setpolicy.regNo=localStorage.getItem("regNo")
    this.setpolicy.policyNo=localStorage.getItem("policy")

    this.service.policy(this.setpolicy)

  }

}
