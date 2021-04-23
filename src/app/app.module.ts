import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShipListComponent } from './components/ship-list/ship-list.component';
import { ShipDetailsComponent } from './components/ship-details/ship-details.component';
import { PilotDetailsComponent } from './components/pilot-details/pilot-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        ShipListComponent,
        ShipDetailsComponent,
        PilotDetailsComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }