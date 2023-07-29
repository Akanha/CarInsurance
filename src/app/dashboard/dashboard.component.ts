import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Policy } from '../policy.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  details:Policy[]=[]
  constructor(private service:AuthService,private router:Router){}



  ngOnInit(){
    this.service.list().subscribe(d => this.details=d)
  }
}
