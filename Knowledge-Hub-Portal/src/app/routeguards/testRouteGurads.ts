import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserregistrationComponent } from "../userregistration/userregistration.component";
import { Observable } from "rxjs";

export function canDeactivateFunctionGuard(
    component:UserregistrationComponent,
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean 
    {

return component.canExit();
    }
