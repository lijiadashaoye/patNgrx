import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.css']
})
export class TagShapeComponent {
  tagShap: string;
  @Output() selectShapeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  selectShape(shape: string) {
    this.selectShapeEvent.emit(shape);
  }
}
