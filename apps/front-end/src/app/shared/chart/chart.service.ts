import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private _pieChartValue = new BehaviorSubject<number>(0)
  public pieChartValue$ = this._pieChartValue.asObservable()


  constructor() { }

  setPieChartValue(value: number) {
    this._pieChartValue.next(value)
  }
}
