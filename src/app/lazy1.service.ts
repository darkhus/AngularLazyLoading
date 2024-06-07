import { Injectable } from '@angular/core';
import { LazyService } from './lazyAbstract';

@Injectable({
  providedIn: 'root'
})
export default class Lazy1 implements LazyService {

  constructor() { }

  public action(): string {
    console.log('lazy loaded service 1');
    return 'lazy loaded service 1';
  }
}
