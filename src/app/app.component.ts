import { AfterViewInit, Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LazyService } from './lazyAbstract';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>{{title}}</h1>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  title = '';

  constructor(private injector: Injector) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.lazyLoad();
    }, 1000);

    setTimeout(() => {
      this.lazyLoadWithInjector();
    }, 2000);

    setTimeout(() => {
      this.loadClass();
    }, 3000);

    setTimeout(() => {
      this.loadEnum();
    }, 4000);
  }

  async lazyLoad() {
    let serviceProvider = (await import('./lazy1.service')).default;
    const service = this.injector.get<LazyService>(serviceProvider);
    this.title = service.action();
  }

  async lazyLoadWithInjector() {
    let serviceProvider = (await import('./lazy2.service')).default;
    const customInjector = Injector.create({
      providers: [
        { provide: LazyService, useClass: serviceProvider },
      ],
    });
    const service = customInjector.get(LazyService)
    this.title = service.action();
  }

  async loadClass() {
    const LazyService  = (await import('./lazyClass')).default;
    const classInstance = new LazyService();
    this.title = classInstance.action();
  }

  async loadEnum() {
    const { LazyEnum } = await import('./lazyEnum');
    this.title = LazyEnum.VALUE_1;
  }
}
