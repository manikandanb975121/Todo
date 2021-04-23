import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { CreateListComponent } from './Components/create-list/create-list.component';
import { ReadListComponent } from './Components/read-list/read-list.component';
import { EditListComponent } from './Components/edit-list/edit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateListComponent,
    ReadListComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
