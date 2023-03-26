import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/app/models/board.model';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-add-boards',
  templateUrl: './add-boards.component.html',
  styleUrls: ['./add-boards.component.css']
})
export class AddBoardsComponent implements OnInit {

  addBoardRequest: Board = {
    boardId: 0,
    title: '',
    lists: []
  };
  constructor(private boardService: BoardsService, private router: Router) { }

  ngOnInit(): void {
  }

  addBoard() {
    this.boardService.addBoard(this.addBoardRequest)
    .subscribe({
      next: (board) => {
       this.router.navigate(['/boards']);
      }
    }
    );
  }

}
