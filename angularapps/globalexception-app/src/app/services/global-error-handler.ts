import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorService } from './error-service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler{
  constructor(private injector:Injector){}
  handleError(err: any): void {
    const errorService=this.injector.get(ErrorService);
    const msg=err instanceof Error?err.message:
    typeof err==='string'?err:'unexpected error';
    errorService.setError(msg)
  }

  
}
