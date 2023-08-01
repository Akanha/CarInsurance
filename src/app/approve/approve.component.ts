import { Component } from '@angular/core';
import { Policy } from '../policy.model';
import { CommonService } from '../service/common.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent {
  claim:Policy[]=[]
  // show:Policy=new Policy()
  constructor(private service1:CommonService, private service2:AuthService){}
  approve(id:number,data:Policy){
    data.claimStatus="Claimed"
    alert("Claim approved")
    this.service2.update(id,data);
  }
  deny(id:number,data:Policy){
    data.claimStatus="Denied"
    this.service2.update(id,data);
  }
  ngOnInit(){
    this.service1.policyAdmin().subscribe(data=>{
      this.claim=data;
    })
  }
}
