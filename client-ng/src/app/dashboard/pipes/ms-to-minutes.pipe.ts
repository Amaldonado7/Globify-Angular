import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToMinutes'
})
export class MsToMinutesPipe implements PipeTransform {

  transform(value: any): string {
    // 1- Convert to seconds:
		let seconds: any = value / 1000;
		// 3- Extract minutes:
		let minutes: any = Math.trunc(seconds / 60); // 60 seconds in 1 minute
		// 4- Keep only seconds not extracted to minutes:
		seconds = Math.trunc(seconds % 60);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		return minutes + ':' + seconds;
  }

}
