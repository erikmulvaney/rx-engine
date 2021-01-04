import {
    BehaviorSubject,
    Observable,
    Subject,
    Subscription,
    merge,
} from 'rxjs';
import {
    map,
    scan,
    startWith,
    withLatestFrom,
} from 'rxjs/operators';

import { Keyboard } from './inputs/keyboard';
import { Mouse } from './inputs/mouse';

export interface InputState {
  [name: string]: boolean
}

export class Engine {
  private _tick = new Subject();
  private inputSubscription?: Subscription;

  constructor(
    private keyboard: Keyboard,
    private mouse: Mouse,
  ) { }

  start() {
    requestAnimationFrame(() => this.onTick());
  }

  stop() {
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
      this.inputSubscription = undefined;
    }
  }

  tick() {
    return this._tick;
  }

  updateState<T>(initialState: T, updateState: (inputState: InputState, state: T) => T): Observable<T> {
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
    let stream = new BehaviorSubject<T>(initialState);
    this.inputSubscription = this.tickInputState().pipe(
      withLatestFrom(stream),
      map(([inputState, state]: [InputState, T]) => updateState(inputState, Object.assign({}, state)))
    ).subscribe((state: T) => {
        stream.next(state);
        requestAnimationFrame(() => this.onTick());
    });
    return stream;
  }

  private onTick() {
    this.tick().next();
  }

  private tickInputState(): Observable<InputState> {
    return this.tick().pipe(
      withLatestFrom(this.inputState()),
      map(([, inputState]: [any, any]) => inputState)
    );
  }

  private inputState() {
    return this.mappedInputs().pipe(
      scan((inputState: any, inputEvent: [string, boolean]) => {
        inputState[inputEvent[0]] = inputEvent[1];
        return inputState;
      }, {}),
      startWith({}));
  }

  private mappedInputs(): Observable<[string, boolean]> {
    return merge(
      this.keyboard.mappedKeyboardInput(),
      this.mouse.mappedMouseInput()
      );
  }
}
