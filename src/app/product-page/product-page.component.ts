import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Product } from '../app.interfaces';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  constructor(private crud: CrudService){}

  ngOnInit(): void {
    this.loading = true;
    this.crud.getProducts().subscribe((res)=>{
      this.products = res;
      this.loading = false;
    })
  }
}
