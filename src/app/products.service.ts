import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  query:string=`
  query{
      products(Function: "Filters"){
          id
          name_ar
          name_en
          admin_comment
          attributes{
              id
          }
          category{
              name_ar
              id
          }
      }
  }
  `
  variables:string=`
  {
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
  `
  
  constructor(private _HttpClient:HttpClient) { }
}
