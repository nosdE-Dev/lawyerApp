import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { LoginModel } from '../models/login-model';
import { RegisterModel } from '../models/register-model';
import { Register } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl: string = environment.urls.urlBase;
  private _auth: Auth | undefined;
  private _register: Register | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }
  get register(): Register {
    return { ...this._register! }
  }

  constructor( private http: HttpClient ) { }

  login(data:LoginModel) {
    return this.http.post<Auth>(`${this.baseUrl }/auth/login`,data)
    .pipe(
      tap( auth => this._auth = auth ),
      tap( auth => localStorage.setItem('token', auth.token! ) ),


    );
  }

  doRegister(data:RegisterModel) {
    return this.http.post<Register>(`${this.baseUrl }/auth/create`,data)
    .pipe(
      tap( data => this._register = data )
    );

  }

  verificaAutenticacion(): Observable<boolean> {
    if ( !localStorage.getItem('token') ) {
      return of(false);
    }
    return of(true); /*this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
              .pipe(
                map( auth => {
                  this._auth = auth;
                  return true;
                })
              );*/
  }

  logout() {
    this._auth = undefined;
  }
}
