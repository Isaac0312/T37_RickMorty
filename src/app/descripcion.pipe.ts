import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descripcion'
})
export class DescripcionPipe implements PipeTransform {

  transform(value: any, args?:any): any {
    if(args != null){
      return value.status;
    }
  }

}
