import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private subcription:Subscription;
  ingredients:Ingredient[];


  constructor(private slService:ShoppinglistService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.subcription=this.slService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }

}
