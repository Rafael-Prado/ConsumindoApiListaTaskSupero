import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTarefa'
})
export class StatusTarefaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == 3)
    return 'Aguardando';
    if(value == 2)
    return 'Finalizado';
    if(value == 1)
    return 'Em Andamento';
  }

}
