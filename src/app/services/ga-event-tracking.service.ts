import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { AppConfig } from '../app.config';

@Injectable()

export class GoogleAnaEventTrackService {

    private _siteConfig: any = null;

    constructor(private _router: Router, private _titleSrv: Title, 
        @Inject(PLATFORM_ID) private _platformId: Object,
        private appConfig: AppConfig) {

        this._siteConfig = this.appConfig.getConfig();

        this._router.events.subscribe(evt => {

            if( evt instanceof NavigationEnd && isPlatformBrowser(this._platformId)) {
                // console.log(evt);
                (<any>window).gtag('config', this._siteConfig['ga-site-key'], {
                    'page_title' : this._titleSrv.getTitle(),
                    'page_path': evt.urlAfterRedirects
                });

            }
        });
    }

    public gaEmitEvent(eventAction: string, eventCategory: string,
        eventLabel: string = null, eventValue: number = null) {
    
        (<any>window).gtag('event', eventAction, {
            'event_category': eventCategory,
            'event_label': eventLabel,
            'value': eventValue
        });
    }
}