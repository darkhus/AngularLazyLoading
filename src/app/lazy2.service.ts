import { Injectable } from '@angular/core';
import { LazyService } from './lazyAbstract';

@Injectable({
  providedIn: 'root'
})
export default class Lazy2 implements LazyService {

  constructor() { }

  public action() {
    console.log('lazy loaded service 2');
    return 'lazy loaded service 2';
  }
}
