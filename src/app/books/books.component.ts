import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../core/data.service';
import { IBook } from '../shared/interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  title: string;
  books: IBook[] = [];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Books';
    this.getBooksPage(1);
  }

  getBooksPage(page: number) {
    this.dataService.getBooks()
        .subscribe((books: IBook[]) => {
          this.books = books;
        },
        (err: any) => console.error(err),
        () => console.log('getBooksPage() retrieved books'));
  }

}
