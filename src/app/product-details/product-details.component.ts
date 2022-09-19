import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  //Inject ActivatedRoute into the Constructor() by adding private route:
  constructor(private route: ActivatedRoute) {}

  //this method, extracts the productId from the route parameters and find the corresponding product in the products array
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    //Find the product that correspond with the id provided in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
