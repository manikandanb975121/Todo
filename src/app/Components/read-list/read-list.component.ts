import { Component, OnInit } from '@angular/core';

// Dialog
import { CreateListComponent } from '../create-list/create-list.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// Service
import { ListService } from '../../Services/list.service';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css']
})
export class ReadListComponent implements OnInit {

  list = [];

  constructor(
    public dialog: MatDialog,
    public listServices: ListService
  ) { }

  ngOnInit(): void {
    this.listServices.getUpdatedList().subscribe((data) => {
      console.log(data);
      this.list.push(data);
      console.log(this.list);
    });
  }

  openCreate(): void {

    const dialogRef = this.dialog.open(CreateListComponent, {
      width: '500px',
      height: '400px'
    });

  }

  edit(id): void {
    this.list.forEach(lst => {
      if (lst.id === id) {
        lst.completed = true;
      }
    });
  }

  delete(id): void {
    this.list = this.list.filter(x => x.id !== id);
  }
}
