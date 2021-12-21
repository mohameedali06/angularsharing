import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
 uname:string="hello";
 city:string="banglore";
 name ="iphone13";
 
 source:any="assets/iphone.png";
 high="200";
 wid="500";
 src:any="assets/iphone.png";
 enable:boolean=true;

 val:string="";
 tname:string=""

  constructor() { }

  ngOnInit(): void {
  }
  getDetails(){
    return `hi this is ${this.uname} and city ${this.city}`;
  
  }
  change(){
    this.enable=!this.enable;
  }
  demo(v1:any,v2:any){
    
    this.val=v1+" "+v2;
  
  }
 
}
