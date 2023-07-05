import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let sexo = "masculino";

    if(value === 'f') {
      sexo = "feminino"
    }

    return sexo;
  }

}
