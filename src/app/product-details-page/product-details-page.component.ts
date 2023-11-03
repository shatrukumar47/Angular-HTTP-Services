import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../app.interfaces';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  product: any = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  loading:boolean = false;
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    let id: any = this.activeRoute.snapshot.paramMap.get('id');
    id = parseInt(id);
    this.loading = true;
    this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe((res)=>{
      this.product = res;
      this.loading = false;
    })
  }

  handleWishlist(){

  }

  handleBuyNow(){
    
  }
}
