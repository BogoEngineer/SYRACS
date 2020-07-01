import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate{
    constructor(
        private router: Router
    ){}

    canActivate(){
        let user = localStorage.getItem('userInfo');
        console.log("USER", JSON.parse(user)[0].admin);
        if(user != null){
            if(JSON.parse(user)[0].admin == false) return true;
            this.router.navigate([''])
            return false;
        }
        this.router.navigate([''])
        return false;
    }

}