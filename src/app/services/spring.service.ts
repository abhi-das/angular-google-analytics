import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SpringService {

    constructor( private _http:HttpClient ) {}

    public getCarList(): Observable<any> {
        return this._http.get('http://localhost:8080/cars');
    }
}