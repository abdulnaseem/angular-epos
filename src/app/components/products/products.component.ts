import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [ProductsService]
})
export class ProductsComponent {
    
}