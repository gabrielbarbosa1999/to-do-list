import { ToDoService } from './../../service/to-do.service';
import { ToDoListDTO } from './../../dtos/ToDoListDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  constructor(private service: ToDoService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((res) => console.log(res));
  }
}
