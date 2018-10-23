import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }
	private subscription: Subscription;

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

  ngOnInit() {
		this.ingredients = this.slService.getIngredients();
		this.subscription = this.slService.ingredientsChanged
			.subscribe(
				(ingredients: Ingredient[]) => {
					this.ingredients = ingredients;
				}
			);
	}
	


}
