import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollectionData } from 'src/app/models/collection.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  @Input() data: CollectionData = new CollectionData();
  @Input() index: number = 0;
  @Output() deleteUser = new EventEmitter();

  delete() {
    this.deleteUser.emit(this.index);
  }
}
