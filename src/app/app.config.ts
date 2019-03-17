import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppConfig {

    private config: any = null;

    constructor(public _http: HttpClient) { }

    public getConfig() {
        return this.config;
    }
    
    public load() {
 
        return new Promise<void>((resolve, reject) => {
            console.log("AppInitService.init() called");
            ////do your initialisation stuff here  
            // setTimeout(() => {
            //     console.log('AppInitService Finished');
            //     resolve();
            // }, 6000);
            this._http.get('../assets/app-config.json')
                .subscribe( res => {
                    this.config = res;
                    console.log('AppInitService Finished', res);
                    resolve();
                });
 
        });
    }

}
