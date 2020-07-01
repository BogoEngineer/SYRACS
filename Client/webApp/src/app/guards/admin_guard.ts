import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate{
    constructor(
        private router: Router
    ){}

    canActivate(){
        let user = localStorage.getItem('userInfo');
        if(user != null){
            if(JSON.parse(user)[0].admin == true) return true;
            this.router.navigate([''])
            return false;
        }
        this.router.navigate([''])
        return false;
    }

}