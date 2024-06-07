export abstract class LazyService {
    public action(): string {
      console.log(`I'm Abstract`);
      return '';
    }
}
