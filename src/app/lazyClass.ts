import { LazyService } from './lazyAbstract';

export default class LazyClass implements LazyService {

  constructor() { }

  public action(): string {
    console.log('lazy loaded class');
    return 'lazy loaded class';
  }
}
