import * as firebase from 'firebase'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable()
export class AuthService{
    constructor(private router:Router){
    }
    token:string;
    signupUser(email:string,password:string){
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
        .catch(
            error=>{console.log(error)}
        )
    }
    signinUser(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response=>{
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token:string)=>this.token=token

                )
                console.log(response)
            }
        )
        .catch(
            error=>console.log(error)
        );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
         .then(
            (token:string)=>this.token=token
        );
        console.log(this.token)
        return this.token
    }
    logout(){
        firebase.auth().signOut();
        this.token=null;
    }


    isAuthenticated(){
        return this.token!=null;;
    }


}