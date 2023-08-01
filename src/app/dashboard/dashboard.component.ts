import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../policy.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  details:Policy[]=[]
  constructor(private service:AuthService,private router:Router,private http:HttpClient){}

  update(id:number,details:Policy){
    if(details.claimStatus=="Claimed"){
      alert("already claimed")
    }
    else{
    details.claimStatus="Filed Successfully";
    this.service.update(id,details)
    }
  }


  ngOnInit(){
    this.service.list().subscribe((d) => {this.details=d
    });
  }

}
