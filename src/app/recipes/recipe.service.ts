import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

constructor(private slService: ShoppingListService){}

	recipeSelected = new Subject<Recipe>();
	
	private recipes: Recipe[] = [
		new Recipe(
			"A test recipe", 
			"this is a test", 
			'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20),
			]
			)
	];

	getRecipes(){
		return this.recipes.slice();
	}

	getRecipe(index: number){
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
}