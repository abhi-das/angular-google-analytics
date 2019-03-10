import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        data: {
            pageName: 'Home'
        }
    },
    {
        path: "contact-us",
        component: ContactUsComponent,
        data: {
            pageName: "Contact Us"
        }
    },
    {
        path: "help",
        component: HelpComponent,
        data: {
            pageName: "help"
        }
    },
    {
        path: "product-list",
        component: ProductListComponent,
        data: {
            pageName: "Product List"
        }
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "**",
        component: PageNotFoundComponent,
        data: {
            pageName: "Page not found"
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing: false
        })
    ],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}

