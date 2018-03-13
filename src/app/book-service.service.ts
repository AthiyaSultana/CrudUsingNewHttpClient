import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookServiceService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<any> {
    return this.http.get('http://localhost:3000/book');
  }

  addBook(book): Observable<any> {
    return this.http.post('http://localhost:3000/book/saveBook', book, this.httpOptions);
  }

  getBookById(id): Observable<any> {
    const params = new HttpParams().set('id', id);
    const url = `http://localhost:3000/book/getBookById`;
    return this.http.get(url, {params});
  }

  deletBookById(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/book/deleteBook/${id}`);
  }

  updateBook(id, book): Observable<any> {
    console.log('id', id, 'book', book);
    return this.http.put(`http://localhost:3000/book/updateBook/${id}`, book);
  }
}
