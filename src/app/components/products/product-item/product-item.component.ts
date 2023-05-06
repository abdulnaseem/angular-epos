import { Component, Input } from "@angular/core";
import { Product } from "src/app/shared/product.model";


@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

    @Input() product: Product;
    @Input() index: number;
    
}
