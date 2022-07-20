import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { of } from "rxjs"
import { environment } from "src/environments/environment"

export class ApiClass {

    public url = environment.url
    public isProduction = environment.production
    
    
    constructor() {

    }

    error(e : HttpErrorResponse){
        let errorMessage = ""
        if(e.error instanceof ErrorEvent) {
            errorMessage = e.error.message
        } else {
            errorMessage = `Error code: ${e.status}\nMessage: ${e.message}` 
        }
        return of({error:true, msg:errorMessage, data:null})
    }

}