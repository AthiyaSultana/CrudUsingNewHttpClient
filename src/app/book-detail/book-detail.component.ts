import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {BookServiceService} from '../book-service.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(private router: Router, private bookService: BookServiceService, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.bookService.getBookById(id).subscribe((data) => {
      this.book = data;
    }, (err: HttpErrorResponse) => {
      console.log(`error in get book by id ${err}`);
    });

  }

  deleteBook(id) {
    this.bookService.deletBookById(id)
      .subscribe((res) => {
        this.router.navigate(['/books']);
      }, (err: HttpErrorResponse) => {
        console.log(`error deleting book ${err}`);
      });
  }
}
