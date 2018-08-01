import { NgModule } from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from '@angular/router'
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";
import { AuthGuard } from "./auth/auth-guard.service";


const appRoutes:Routes=[
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'recipes',loadChildren:'./recipes/recipe.module#RecipesModule'},
    {path:'shopping-list',component:ShoppingListComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})


export class AppRoutingModule{

}