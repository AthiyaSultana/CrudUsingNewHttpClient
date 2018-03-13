import {inject, TestBed} from '@angular/core/testing';

import {BookServiceService} from './book-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

describe('BookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, HttpClientModule],
      providers: [BookServiceService]
    });
  });

  it('should be created', inject([BookServiceService], (service: BookServiceService) => {
    expect(service).toBeTruthy();
  }));
});
