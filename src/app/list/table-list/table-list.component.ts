import { ToDoService } from './../../service/to-do.service';
import { ToDoListDTO } from './../../dtos/ToDoListDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  dataSource?: any;
  displayedColumns: string[] = ['id', 'toDo', 'done', 'createdAt', 'actions'];

  constructor(private service: ToDoService) {}

  ngOnInit(): void {
    this._findAllToDo();
  }

  private _findAllToDo(): void {
    this.service.findAll().subscribe((res) => {
      this.dataSource = res;
    });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      this._findAllToDo();
    });
  }

  done(id: number): void {
    this.service.done(id).subscribe(() => {
      this._findAllToDo();
    });
  }
}
