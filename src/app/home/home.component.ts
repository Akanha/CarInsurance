import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private route:Router){}
  next(){
    this.route.navigate(["/list"])
  }
}
