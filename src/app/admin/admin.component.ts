import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';





@Component({

  selector: 'app-admin',

  templateUrl: './admin.component.html',

  styleUrls: ['./admin.component.css']

})

export class AdminComponent {

  email:string="";

  password:string="";

  constructor(private service:AuthService,private router:Router){}



  login(){

    if (this.email=="Admin" && this.password=="Admin"){
      this.router.navigate(['/approve'])
    }
  }
}
