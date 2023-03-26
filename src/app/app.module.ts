import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardsListComponent } from './components/boards/boards-list/boards-list.component';
import { AddBoardsComponent } from './components/boards/add-boards/add-boards.component';
import { FormsModule } from '@angular/forms';
import { EditBoardsComponent } from './components/boards/edit-boards/edit-boards.component';
import { BoardComponent } from './components/boards/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardsListComponent,
    AddBoardsComponent,
    EditBoardsComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
