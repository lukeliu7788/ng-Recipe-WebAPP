import { Injectable } from "@angular/core";
import { Http} from '@angular/http'
import { RecipeService } from "../recipes/recipe.service";
import {Response} from '@angular/http'
import { Recipe } from "../recipes/recipe.model";
import { map,catchError } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataStorageService{
    constructor(private http:Http,private recipeSerice:RecipeService,
        private authService:AuthService){    
    }
    storeRecipes(){
      const token=this.authService.getToken();
       return this.http.put('https://ng-recipe-book-befc4.firebaseio.com/recipes.json?auth='+token,
    this.recipeSerice.getRecipes());
    }
    fetchRecipes(){
        const token=this.authService.getToken();
        console.log(token+'1')
      
        return this.http.get('https://ng-recipe-book-befc4.firebaseio.com/recipes.json?auth='
    +token)
        .pipe(map(
            (response:Response)=>{
                const recipes:Recipe[]=response.json();
                for(let recipe of recipes){
                    if(!recipe['Ingredient']){
                        console.log(recipe);
                        recipe['Ingredient']=[];
                    }
                    return recipes;
                }}))
        .subscribe(
            (recipes:Recipe[]) => {
                this.recipeSerice.setRecipes(recipes);
            });
     }
}