import {Ingredient} from '../shared/ingredient.model'
import { Subject } from 'rxjs';

export class ShoppinglistService{
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
    ];

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredients(){
        return this.ingredients.slice();   
    }
    getIngredient(index:number){
        return this.ingredients[index];  
    }
    updateIngredient(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}