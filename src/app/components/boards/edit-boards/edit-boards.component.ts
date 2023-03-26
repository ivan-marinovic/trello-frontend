import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from 'src/app/models/board.model';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-edit-boards',
  templateUrl: './edit-boards.component.html',
  styleUrls: ['./edit-boards.component.css']
})
export class EditBoardsComponent implements OnInit {

  boardDetails: Board = {
    boardId: 0,
    title: '',
    lists: []
  }

  constructor(private route: ActivatedRoute, private boardService: BoardsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const boardId = params.get('boardId');

        if(boardId) {
          this.boardService.getBoard(boardId)
          .subscribe({
            next:(response) => {
              this.boardDetails = response;
            }
          })
        }
      }
    })
  }

  updateBoard() {
    this.boardService.updateBoard(this.boardDetails.boardId, this.boardDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['boards']);
      }
    });
  }

  deleteBoard(boardId: number) {
    this.boardService.deleteBoard(boardId)
    .subscribe({
      next: (response) => {
        this.router.navigate(['boards']);
      }
    })
  }

}
