import { Injectable } from '@angular/core';

import { IBook } from '../shared/interfaces';

@Injectable()
export class TrackByService {

  book(index: number, book: IBook) {
    return book._id;
  }
}
