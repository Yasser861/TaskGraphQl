import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Apollo } from 'apollo-angular';
import { Get_pro } from '../graphQl.operation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  $:any;
  products:any;
  constructor(private _Apollo:Apollo){}
  ngOnInit(): void {
    this._Apollo.watchQuery({
      query:Get_pro,
      variables:{
        "category_id": "18",
        "price_from": "",
        "price_to": "",
        "rate_from": "",
        "rate_to": "",
        "spacefications": [],
        "attributes": [],
        "brand_id": [],
        "name": "",
        "vendor_id": 460
    }
    }).valueChanges.subscribe({
      next:(res)=>{
        console.log(res);
        this.products=res;
        console.log(this.products.data.products);
        
      }
    })
  }
}