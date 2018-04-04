import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: [],
  providers: [provideLoggingService ()]
})

export class AppComponent {
  title = 'app';

  constructor(private logging: LoggingService) {
    logging.log('test log');
  }
}

// set true o false
export const LOGGING_USE_DATE = false;

export function provideLoggingService() {
  return {
    provide: LoggingService,
    useFactory: () => new LoggingService(LOGGING_USE_DATE)
  };
}
