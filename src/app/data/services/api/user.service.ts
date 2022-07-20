import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiClass } from '../../schema/Api.class';
import { catchError, map } from 'rxjs/operators';
import { ICardUser } from 'src/app/shared/components/card/card-user/card-user.metada'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass{

  constructor(protected http:HttpClient){
    super()
  }

  getAllUsers(): Observable<{
    error:boolean,
    msg:string,
    data:ICardUser[]
  }>{
    const response = {error: false, msg: '', data: [] as ICardUser[]}
    console.log(this.url + 'users/getall') 
    return this.http.get<ICardUser[]>("http://localhost:4000/users/getall")
    .pipe(
      map( r => {
        response.data = r;
        return response;
      }),
        catchError(() => of(response))
    );
  }
}
