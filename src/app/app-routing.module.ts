import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoardsComponent } from './components/boards/add-boards/add-boards.component';
import { BoardsListComponent } from './components/boards/boards-list/boards-list.component';
import { EditBoardsComponent } from './components/boards/edit-boards/edit-boards.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsListComponent
  },
  {
    path: 'boards',
    component: BoardsListComponent
  },
  {
    path: 'boards/add',
    component: AddBoardsComponent
  },
  {
    path: 'boards/edit/:boardId',
    component: EditBoardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
