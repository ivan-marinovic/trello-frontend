import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {

  boards: Board[] = [];
  constructor(private boardService: BoardsService) { }

  ngOnInit(): void {
    this.boardService.getAllBoards()
    .subscribe({
      next: (boards) => {
        this.boards = boards;
      },
      error: (response) => {
        console.log(response);
      } 
    })
  }

}
