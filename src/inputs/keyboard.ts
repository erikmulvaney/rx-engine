import {
    BehaviorSubject,
    fromEvent,
    merge,
    Observable,
} from 'rxjs';

import {
    filter,
    map,
    share,
    withLatestFrom,
} from 'rxjs/operators';

import { ALL_KEYS } from '../constants/key';

export interface KeyBinding {
  [name: string]: string
}

interface KeyState {
    key: string,
    state: boolean,
}

export interface Binding {
  keys: string[];
  action: string;
}

interface RegisteredBindings {
  [name: string]: Binding[];
}

const KEYDOWN = 'keydown';
const KEYUP = 'keyup';

export class Keyboard {
  private keyboardInput$: Observable<KeyState>;
  private binding$: BehaviorSubject<KeyBinding> = new BehaviorSubject({});

  private registeredBindings: RegisteredBindings = {};

  constructor() {
    this.keyboardInput$ = this.keyboardInputSetup();
  }

  addBinding(name: string, bindings: Binding[]) {
    this.registeredBindings[name] = bindings;
    this.updateBindings();
  }

  removeBinding(name: string) {
    delete this.registeredBindings[name];
    this.updateBindings();
  }

  removeAllBindings() {
    this.registeredBindings = {};
    this.updateBindings();
  }

  mappedKeyboardInput() {
    return this.keyboardInput$.pipe(
        withLatestFrom(this.binding$),
        filter(([keyState, binding]: [KeyState, KeyBinding]) => new Set(Object.keys(binding)).has(keyState.key)),
        map<[KeyState, KeyBinding], [string, boolean]>(
          ([keyState, binding]: [KeyState, KeyBinding]) => [binding[keyState.key], keyState.state]
        ),
    );
  }

  private updateBindings() {
    let bindings: KeyBinding = {};
    Object.keys(this.registeredBindings).forEach((key: string) => {
      let keyBindings = this.registeredBindings[key];
      keyBindings.forEach((binding: Binding) => {
        binding.keys.forEach((key: string) => {
          if (ALL_KEYS.has(key)) {
            bindings[key] = binding.action;
          }
        });
      });
    });
    this.binding$.next(bindings);
  }

  private keyboardInputSetup() {
    const keyTrue$ = fromEvent<KeyboardEvent>(document, KEYDOWN)
        .pipe<KeyState>(map((event: KeyboardEvent) => ({ key: event.key, state: true })));

    const keyFalse$ = fromEvent<KeyboardEvent>(document, KEYUP)
        .pipe<KeyState>(map((event: KeyboardEvent) => ({ key: event.key, state: false })));

    const keyState$ = merge(keyTrue$, keyFalse$);
    return keyState$.pipe(share());
  }
}