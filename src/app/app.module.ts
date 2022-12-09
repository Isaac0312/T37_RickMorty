import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { ElementosModule } from './elementos/elementos.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "./elementos/navbar/navbar.component";
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CharactersComponent,
        AboutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ElementosModule,
        HttpClientModule,
        FormsModule,
    ]
})
export class AppModule { }
