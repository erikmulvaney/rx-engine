export enum Key {
    KeyA = 'KeyA',
    KeyB = 'KeyB',
    KeyC = 'KeyC',
    KeyD = 'KeyD',
    KeyE = 'KeyE',
    KeyF = 'KeyF',
    KeyG = 'KeyG',
    KeyH = 'KeyH',
    KeyI = 'KeyI',
    KeyJ = 'KeyJ',
    KeyK = 'KeyK',
    KeyL = 'KeyL',
    KeyM = 'KeyM',
    KeyN = 'KeyN',
    KeyO = 'KeyO',
    KeyP = 'KeyP',
    KeyQ = 'KeyQ',
    KeyR = 'KeyR',
    KeyS = 'KeyS',
    KeyT = 'KeyT',
    KeyU = 'KeyU',
    KeyV = 'KeyV',
    KeyW = 'KeyW',
    KeyX = 'KeyX',
    KeyY = 'KeyY',
    KeyZ = 'KeyZ',
    Key0 = 'Key0',
    Key1 = 'Key1',
    Key2 = 'Key2',
    Key3 = 'Key3',
    Key4 = 'Key4',
    Key5 = 'Key5',
    Key6 = 'Key6',
    Key7 = 'Key7',
    Key8 = 'Key8',
    Key9 = 'Key9',
    Left = 'Left',
    Right = 'Right',
    Up = 'Up',
    Down = 'Down',
    Enter = 'Enter',
    Tab = 'Tab',
    Spacebar = 'Spacebar',
    Alt = 'Alt',
    Ctrl = 'Ctrl',
    Meta = 'Meta',
    Shift = 'Shift',
    None = 'None',    // Dummy key, for mapping unknown inputs
}

export class KeyList {
    private keys: Set<Key>;

    constructor(keys?: Key[]) {
        this.keys = new Set<Key>();
        if (keys !== undefined) {
            for (let key of keys) {
                this.keys.add(key);
            }
        }
    }

    add(key: Key) {
        this.keys.add(key);
    }

    _toArray(): string[] {
        let result = new Array<string>();
        for (let key of this.keys) {
            result = result.concat(mapping(key));
        }
        return result;
    }
}

const mapping = (key: Key): string[] => {
    switch(key) {
        case Key.KeyA: return ['a', 'A'];
        case Key.KeyB: return ['b', 'B'];
        case Key.KeyC: return ['c', 'C'];
        case Key.KeyD: return ['d', 'D'];
        case Key.KeyE: return ['e', 'E'];
        case Key.KeyF: return ['f', 'F'];
        case Key.KeyG: return ['g', 'G'];
        case Key.KeyH: return ['h', 'H'];
        case Key.KeyI: return ['i', 'I'];
        case Key.KeyJ: return ['j', 'J'];
        case Key.KeyK: return ['k', 'K'];
        case Key.KeyL: return ['l', 'L'];
        case Key.KeyM: return ['m', 'M'];
        case Key.KeyN: return ['n', 'N'];
        case Key.KeyO: return ['o', 'O'];
        case Key.KeyP: return ['p', 'P'];
        case Key.KeyQ: return ['q', 'Q'];
        case Key.KeyR: return ['r', 'R'];
        case Key.KeyS: return ['s', 'S'];
        case Key.KeyT: return ['t', 'T'];
        case Key.KeyU: return ['u', 'U'];
        case Key.KeyV: return ['v', 'V'];
        case Key.KeyW: return ['w', 'W'];
        case Key.KeyX: return ['x', 'X'];
        case Key.KeyY: return ['y', 'Y'];
        case Key.KeyZ: return ['z', 'Z'];
        case Key.Key0: return ['0'];
        case Key.Key1: return ['1'];
        case Key.Key2: return ['2'];
        case Key.Key3: return ['3'];
        case Key.Key4: return ['4'];
        case Key.Key5: return ['5'];
        case Key.Key6: return ['6'];
        case Key.Key7: return ['7'];
        case Key.Key8: return ['8'];
        case Key.Key9: return ['9'];
        case Key.Left: return ['ArrowLeft', 'Left'];
        case Key.Right: return ['ArrowRight', 'Right'];
        case Key.Up: return ['ArrowUp', 'Up'];
        case Key.Down: return ['ArrowDown', 'Down'];
        case Key.Enter: return ['Enter'];
        case Key.Tab: return ['Tab'];
        case Key.Spacebar: return [' ', 'Spacebar'];
        case Key.Alt: return ['Alt'];
        case Key.Ctrl: return ['Control'];
        case Key.Meta: return ['Meta', 'OS'];
        case Key.Shift: return ['Shift'];
    }
    return [];
};

export const keyLookup = (key: string): Key => {
    switch(key) {
        case 'a':
        case 'A': return Key.KeyA;
        case 'b':
        case 'B': return Key.KeyB;
        case 'c':
        case 'C': return Key.KeyC;
        case 'd':
        case 'D': return Key.KeyD;
        case 'e':
        case 'E': return Key.KeyE;
        case 'f':
        case 'F': return Key.KeyF;
        case 'g':
        case 'G': return Key.KeyG;
        case 'h':
        case 'H': return Key.KeyH;
        case 'i':
        case 'I': return Key.KeyI;
        case 'j':
        case 'J': return Key.KeyJ;
        case 'k':
        case 'K': return Key.KeyK;
        case 'l':
        case 'L': return Key.KeyL;
        case 'm':
        case 'M': return Key.KeyM;
        case 'n':
        case 'N': return Key.KeyN;
        case 'o':
        case 'O': return Key.KeyO;
        case 'p':
        case 'P': return Key.KeyP;
        case 'q':
        case 'Q': return Key.KeyQ;
        case 'r':
        case 'R': return Key.KeyR;
        case 's':
        case 'S': return Key.KeyS;
        case 't':
        case 'T': return Key.KeyT;
        case 'u':
        case 'U': return Key.KeyU;
        case 'v':
        case 'V': return Key.KeyV;
        case 'w':
        case 'W': return Key.KeyW;
        case 'x':
        case 'X': return Key.KeyX;
        case 'y':
        case 'Y': return Key.KeyY;
        case 'z':
        case 'Z': return Key.KeyZ;
        case '0': return Key.Key0;
        case '1': return Key.Key1;
        case '2': return Key.Key2;
        case '3': return Key.Key3;
        case '4': return Key.Key4;
        case '5': return Key.Key5;
        case '6': return Key.Key6;
        case '7': return Key.Key7;
        case '8': return Key.Key8;
        case '9': return Key.Key9;
        case 'ArrowLeft':
        case 'Left': return Key.Left;
        case 'ArrowRight':
        case 'Right': return Key.Right;
        case 'ArrowUp':
        case 'Up': return Key.Up;
        case 'ArrowDown':
        case 'Down': return Key.Down;
        case 'Enter': return Key.Enter;
        case 'Tab': return Key.Tab;
        case ' ':
        case 'Spacebar': return Key.Spacebar;
        case 'Alt': return Key.Alt;
        case 'Control': return Key.Ctrl;
        case 'Meta':
        case 'OS': return Key.Meta;
        case 'Shift': return Key.Shift;
    }
    return Key.None;
};

export const ALL_KEYS: Set<string> = new Set(new KeyList(Object.values(Key))._toArray());

// export const ALL_KEYS = new Set(new KeyList([
//     Key.KeyA,
//     Key.KeyB,
//     Key.KeyC,
//     Key.KeyD,
//     Key.KeyE,
//     Key.KeyF,
//     Key.KeyG,
//     Key.KeyH,
//     Key.KeyI,
//     Key.KeyJ,
//     Key.KeyK,
//     Key.KeyL,
//     Key.KeyM,
//     Key.KeyN,
//     Key.KeyO,
//     Key.KeyP,
//     Key.KeyQ,
//     Key.KeyR,
//     Key.KeyS,
//     Key.KeyT,
//     Key.KeyU,
//     Key.KeyV,
//     Key.KeyW,
//     Key.KeyX,
//     Key.KeyY,
//     Key.KeyZ,
//     Key.Key0,
//     Key.Key1,
//     Key.Key2,
//     Key.Key3,
//     Key.Key4,
//     Key.Key5,
//     Key.Key6,
//     Key.Key7,
//     Key.Key8,
//     Key.Key9,
//     Key.Left,
//     Key.Right,
//     Key.Up,
//     Key.Down,
//     Key.Enter,
//     Key.Tab,
//     Key.Spacebar,
//     Key.Alt,
//     Key.Ctrl,
//     Key.Meta,
//     Key.Shift,
// ])._toArray());
