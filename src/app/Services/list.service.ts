import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list = new Subject<any>();

  constructor() { }

  createList(data): void {
    this.list.next(data);
  }

  getUpdatedList(): any {
    return this.list.asObservable();
  }
}
