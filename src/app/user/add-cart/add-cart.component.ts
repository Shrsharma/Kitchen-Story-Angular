import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  title = 'Store Items';
  searchText;
  items = [
    { id: 11, name: 'Apples', price: '250/kg' },
    { id: 12, name: 'Potatoes' , price: '30/kg'},
    { id: 13, name: 'Wheat Flour' , price: '50/kg'},
    { id: 14, name: 'Dal' , price: '100/kg' },
    { id: 15, name: 'Refined Oil' , price: '300/litre'},
  ];



  constructor() { }

  item1: string;
  item2: string;
  item3: string;
  price: number;
  total: number = 0;
  value:boolean;
  prod1:string = "";
  prod2:string = "";
  prod3:string = "";

  ngOnInit(): void {

  }

  handleItem1(event)
  {
    this.item1="250";
    sessionStorage.setItem("item1",this.item1);
  }
  handleItem2(event)
  {
    this.item2="30";
    sessionStorage.setItem("item2",this.item2);
  }
  handleItem3(event)
  {
    this.item3="50";
    sessionStorage.setItem("item3",this.item3);
  }

  handleCart(event)
  {
    if(sessionStorage.getItem("item1"))
    {
      this.price= +sessionStorage.getItem("item1");
      this.total = this.total + this.price;
      this.prod1 = "Apples - 250/kg";
    }
    if(sessionStorage.getItem("item2"))
    {
      this.price= +sessionStorage.getItem("item2");
      this.total = this.total + this.price;
      this.prod2 = "Potaoes - 30/kg";
    }
    if(sessionStorage.getItem("item3"))
    {
      this.price= +sessionStorage.getItem("item3");
      this.total = this.total + this.price;
      this.prod3 = "Wheat Flour - 50kg";
    }

    console.log(this.total);
  }


}
