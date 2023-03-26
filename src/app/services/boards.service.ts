import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.baseApiUrl + '/api/v1/board')
  }

  addBoard(addBoardRequest: Board): Observable<Board> {
    addBoardRequest.boardId = 0;
    return this.http.post<Board>(this.baseApiUrl + '/api/v1/board', addBoardRequest)
  }

  getBoard(boardId: string): Observable<Board> {
    return this.http.get<Board>(this.baseApiUrl + '/api/v1/board/' + boardId);
  }

  updateBoard(boardId: number, updateBoardRequest: Board): Observable<Board> {
    return this.http.put<Board>(this.baseApiUrl + '/api/v1/board/' + boardId, updateBoardRequest)
  }

  deleteBoard(boardId: number): Observable<Board> {
    return this.http.delete<Board>(this.baseApiUrl + '/api/v1/board/' + boardId);
  }
  
}
