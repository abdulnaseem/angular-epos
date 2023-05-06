import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/product.model";
import { ProductsService } from "../products.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];

    constructor(private productService: ProductsService) {}

    ngOnInit() {
        this.products = this.productService.getProducts();
        console.log(this.products);
    }
}