import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TxDetailsDatePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'txdate',
})
export class TxDetailsDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it a good for read date.
   */
  transform(value: string) {
    let _date = new Date(Number.parseInt(value));

    let _weekDay = _date.getDay();
    let _dateDay = _date.getDate();
    let _dateMonth = _date.getMonth();
    let _dateYear = _date.getFullYear();

    return this.getDateString(_weekDay, _dateDay, _dateMonth, _dateYear);

  }

  private getDateString(weekDay: number, day: number, month: number, year: number){
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'May', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let _value = 'WeekDay, Month Day, Year';
    _value = _value.replace('WeekDay', weekDays[weekDay]);
    _value = _value.replace('Month', months[month]);
    _value = _value.replace('Year', year.toString());

    if(day < 10){
      _value = _value.replace('Day', '0'+day);
    } else {
      _value = _value.replace('Day', day.toString());
    }

    return _value;
  }
}
