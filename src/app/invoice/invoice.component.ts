import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  email:any=localStorage.getItem("email")
  policy:any=localStorage.getItem("policy")
  regNo:any=localStorage.getItem("regNo")
  price:any=localStorage.getItem("value")+"₹"

}


