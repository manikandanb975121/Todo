import { Component, OnInit } from '@angular/core';

// Forms
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { ListService } from '../../Services/list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  createList = new FormGroup({
    work: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    completed: new FormControl(false, Validators.required)
  });
  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.createList.patchValue({
      id: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
      completed: false
    });
    console.log(this.createList.value);
    if (this.createList.value.work.length > 0) {
      this.listService.createList(this.createList.value);
      this.createList.reset();
    }
  }
}
