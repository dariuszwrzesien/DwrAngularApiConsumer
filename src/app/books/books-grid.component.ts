import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IBook } from '../shared/interfaces';
import { TrackByService } from '../core/trackby.service';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksGridComponent implements OnInit {

  @Input() books: IBook[] = [];

  constructor(public trackby: TrackByService) { }

  ngOnInit() {}

}
