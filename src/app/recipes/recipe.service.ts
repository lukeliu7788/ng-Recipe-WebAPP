import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()

export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
    private recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fsoups-and-stews-utot_5_west_213_0.jpg%3Fitok%3Dq_X2RYH-&w=800&q=85',
    [
        new Ingredient('Meat',1),
        new Ingredient("French Fries",20)
    ]
    )
        ,
        new Recipe('A Test Recipe1','This is simply a test1',
        'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fsoups-and-stews-utot_5_west_213_0.jpg%3Fitok%3Dq_X2RYH-&w=800&q=85',
    [
        new Ingredient('Buns',2),
        new Ingredient("Meat",15)
    ])
      ];

      constructor(private slService:ShoppinglistService){

      }

    setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice(); 
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    getRecipe(id:number){
        return this.recipes[id];
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}