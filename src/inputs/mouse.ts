import {
    merge,
    Observable,
    Subject,
} from 'rxjs';
import { map, share } from 'rxjs/operators';

export class Mouse {
  private mouseDown$ = new Subject<string>();
  private mouseUp$ = new Subject<string>();

  private mouseInput$: Observable<[string, boolean]>;

  constructor() {
    this.mouseInput$ = this.mouseInputSetup();
  }

  mouseDown(name: string): void {
    this.mouseDown$.next(name);
  }

  mouseUp(name: string): void {
    this.mouseUp$.next(name);
  }

  mappedMouseInput(): Observable<[string, boolean]> {
    return this.mouseInput$;
  }

  private mouseInputSetup(): Observable<[string, boolean]> {
    let mouseTrue$ = this.mouseDown$.pipe<[string, boolean]>(map((name: string) => [name, true]));
    let mouseFalse$ = this.mouseUp$.pipe<[string, boolean]>(map((name: string) => [name, false]));

    let mouseState$ = merge(mouseTrue$, mouseFalse$);
    return mouseState$.pipe(share());
  }
}