import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result',
})
export class ResultPipe implements PipeTransform {

  transform(result:string):any {
    if(result==='Passed'){
      return "text-success"
    }
    if(result==='Failed'){
      return "text-danger"
    }
  }

}
