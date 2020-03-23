import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail;
  constructor(
        private route: ActivatedRoute,
        private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(ddd => {
      this.productDetail = products[+ddd.get('productId')];
    });
  }

  addToCart(a) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(a);
  }


}