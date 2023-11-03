import { Component, Input } from '@angular/core';
import { Product } from '../app.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
  @Input() item: Product = {
    id: 0,
    title: '',
    price: 0,
    description:'',
    category: "",
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  constructor(private router: Router){}

  viewDetails(){
    this.router.navigate(["/product", this.item.id])
  }
}
