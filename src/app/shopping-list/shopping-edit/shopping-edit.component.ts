import { 
	Component, 
	OnInit,
	OnDestroy, 

} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {



  constructor(private slService: ShoppingListService) { }
	subscription: Subscription;
	editMode = false;
	editedItemIndex: number;

  ngOnInit() {
		this.subscription = this.slService.startedEditing
			.subscribe(
				(index: number) => {
					this.editedItemIndex = index;
					this.editMode = true;
				}
			);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();

	}
	
	onAddItem(form: NgForm) {
		const value = form.value;
		const newIngredient = new Ingredient(value.name, value.amount);
		this.slService.addIngredient(newIngredient);
	}

}
