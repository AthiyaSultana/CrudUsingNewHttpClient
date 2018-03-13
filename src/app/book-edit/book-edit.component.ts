import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private bookService: BookServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    /* this.http.get('/book/' + id).subscribe(data => {
       this.book = data;
     });*/
    this.bookService.getBookById(id).toPromise().then(data => {
      this.book = data;
    }).catch((err: HttpErrorResponse) => {
      console.log('err', err);
    });
  }

  updateBook(id, data) {
    return this.bookService.updateBook(id, data).toPromise().then((res) => {
      const id = res['_id'];
      this.router.navigate(['/book-details', id]);
    });
    /*   this.http.put('/book/updateBook' + id, data)
         .subscribe(res => {
             let id = res['_id'];
             this.router.navigate(['/book-details', id]);
           }, (err) => {
             console.log(err);
           }
         );*/
  }

}
