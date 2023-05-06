import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "src/app/shared/product.model";


@Injectable()
export class ProductsService {

    productSelected = new EventEmitter<Product>();

    private products: Product[] = [
        new Product('Coca-Cola Pack of 6', 4.99),
        new Product('Walkers Cheese & Onion', 0.50),
        new Product('Snickers Pack of 4', 1.99),
        new Product('Fanta Orange Pack of 4', 3.99)
    ]

    getProducts() {
        return this.products.slice();
    }    
}