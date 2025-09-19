import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor() { }

  // Example method to fetch data, stubbed with a delayed Observable
  getSomeData(): Observable<any> {
    const mockData = {
      message: 'This is some mock data from the DataApiService.'
    };
    return of(mockData).pipe(delay(1000)); // Simulate a 1-second network delay
  }
}
