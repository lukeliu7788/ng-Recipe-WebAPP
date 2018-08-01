import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppinglistService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipService:RecipeService,
  private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // const id=+this.route.snapshot.params['id']
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipService.getRecipe(this.id);
      }
    )
  }
  onAddToShoppinglist(){
    this.recipService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }
  onDeleteRecipe(){
    this.recipService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }
}
