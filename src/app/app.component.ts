import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature:string='recipe';
  onNavigate(feature:string){
      this.loadedFeature=feature;
  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAExoZxJcWVzY2H3ag9XXHbHYSoOnfsgEw",
      authDomain: "ng-recipe-book-befc4.firebaseapp.com",
    });
  }
  
}
