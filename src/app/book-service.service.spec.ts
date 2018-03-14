import {inject, TestBed} from '@angular/core/testing';

import {BookServiceService} from './book-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('BookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [BookServiceService]
    });
  });

  it('should be created', inject([BookServiceService], (service: BookServiceService) => {
    expect(service).toBeTruthy();
  }));
  describe('GetAllBooks', () => {
    it('getAllBooks', inject([BookServiceService, HttpTestingController],
      (bookService: BookServiceService, http: HttpTestingController) => {

      });
  });
});
