import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'removeBaseUrl' })
export class RemoveBaseUrlPipe implements PipeTransform {
  transform(value: string, baseUrl: string): string {
    return value.replace(new RegExp('^' + baseUrl), '');
  }
}
