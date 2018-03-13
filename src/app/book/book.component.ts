import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;

  constructor(private http: HttpClient,
              private bookService: BookServiceService) {
  }

  deleteBook(id) {
    this.bookService.deletBookById(id).toPromise().then(resp => {
      // console.log('resp', resp);
      this.bookService.getAllBooks().subscribe((books) => {
        this.books = books;
      });
    });
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((books) => {
      this.books = books;
      console.log('this.books', this.books);
    });
  }

}
