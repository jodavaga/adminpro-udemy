import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
    declarations: [
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        BreadcrumbComponent
    ],
    exports: [
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        BreadcrumbComponent
    ]
})

export class SharedModule { }


