import { ToDoCreateDTO } from '../../dtos/ToDoCreateDTO';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToDoService } from 'src/app/service/to-do.service';

@Component({
  selector: 'app-form-table-list',
  templateUrl: './form-table-list.component.html',
  styleUrls: ['./form-table-list.component.css'],
})
export class FormTableListComponent implements OnInit {
  toDoControl: FormControl = new FormControl('', Validators.required);
  dataSource?: any;
  displayedColumns: string[] = ['id', 'toDo', 'done', 'createdAt', 'actions'];

  constructor(private service: ToDoService) {}

  ngOnInit(): void {
    this._findAllToDo();
  }

  addToDo(): void {
    const body: ToDoCreateDTO = { toDo: this.toDoControl.value };
    this.service.create(body).subscribe(() => {
      this._findAllToDo();
    });
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
