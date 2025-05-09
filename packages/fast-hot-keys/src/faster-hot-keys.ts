import useHotkey from "./key-combo";

import { DependencyList, useCallback } from "react";

// Teclas principales
type MainKeysforControl =
  | "KeyA"
  | "KeyB"
  | "KeyC"
  | "KeyD"
  | "KeyE"
  | "KeyF"
  | "KeyG"
  | "KeyH"
  | "KeyI"
  | "KeyJ"
  | "KeyK"
  | "KeyL"
  | "KeyM"
  | "KeyN"
  | "KeyO"
  | "KeyP"
  | "KeyQ"
  | "KeyR"
  | "KeyS"
  | "KeyT"
  | "KeyU"
  | "KeyV"
  | "KeyX"
  | "KeyY"
  | "KeyZ"
  | "Digit0"
  | "Digit1"
  | "Digit2"
  | "Digit3"
  | "Digit4"
  | "Digit5"
  | "Digit6"
  | "Digit7"
  | "Digit8"
  | "Digit9";

type ArrowKeys = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";

// Combinacones del tipo ModKey + Mainkey
type ControlLeftCombo =
  | `ControlLeft+${MainKeysforControl}`
  | `ControlLeft+${ArrowKeys}`;
type ControlRightCombo =
  | `ControlRight+${MainKeysforControl}`
  | `ControlRight+${ArrowKeys}`;

type AltLeftCombo = `AltLeft+${MainKeysforControl}` | `AltLeft+KeyW`;
type AltRightCombo = `AltLeft+${MainKeysforControl}` | `AltLeft+KeyW`;

type ShiftLeftCombo = `ShiftLeft+${MainKeysforControl}` | `ShiftLeft+KeyW`;
type ShiftRightCombo = `ShiftLeft+${MainKeysforControl}` | `ShiftLeft+KeyW`;

//Combinaciones del tipo ModKey + ModKey + MainKey
type ControlLeftAltLeft =
  | `ControlLeft+AltLeft`
  | `ControlLeft+AltLeft+${MainKeysforControl}`;
type ControlRightAltRight =
  | `ControlRightt+AltRight`
  | `ControlRight+AltRight+${MainKeysforControl}`;
type ControlLeftAltRight =
  | `ControlLeft+AltRight`
  | `ControlLeftAltRight+${MainKeysforControl}`;

type ControlRightAltLeft =
  | `ControlRightt+AltLeft`
  | `ControlRight+AltLeft+${MainKeysforControl}`;

type ControlLeftShiftLeft =
  | `ControlLeft+ShiftLeft`
  | `ControlLeft+ShiftLeft+${MainKeysforControl}`
  | `ControlLeft+ShiftLeft+KeyW`;
type ControlRightShiftRight =
  | `ControlRight+ShiftRight`
  | `ControlRight+ShiftRight+${MainKeysforControl}`
  | `ControlRight+ShiftRight+KeyW`;

type ControlLeftShiftRight =
  | `ControlLeft+ShiftRight`
  | `ControlLeft+ShiftRight+${MainKeysforControl}`
  | `ControlLeft+ShiftRight+KeyW`;
type ControlRightShiftLeft =
  | `ControlRight+ShiftLeft`
  | `ControlRight+ShiftLeft+${MainKeysforControl}`
  | `ControlRight+ShiftLeft+KeyW`;

type AltLeftShiftLeft =
  | `AltLeft+ShiftLeft`
  | `AltLeft+ShiftLeft+${MainKeysforControl}`
  | `AltLeft+ShiftLeft+KeyW`;
type AltRightShiftRight =
  | `AltRight+ShiftRight`
  | `AltRight+ShiftRight+${MainKeysforControl}`
  | `AltRight+ShiftRight+KeyW`;
type AltLeftShiftRight =
  | `AltLeft+ShiftRight`
  | `AltLeft+ShiftRight+${MainKeysforControl}`
  | `AltLeft+Shiftright+KeyW`;
type AltRightShiftLeft =
  | `AltRight+ShiftLeft`
  | `AltRight+ShiftLeft+${MainKeysforControl}`
  | `AltRight+ShiftLeft+KeyW`;
// Tipo final

type HotKey =
  | MainKeysforControl
  | ControlLeftCombo
  | ControlRightCombo
  | AltLeftCombo
  | AltRightCombo
  | ShiftLeftCombo
  | ShiftRightCombo
  | ControlLeftAltLeft
  | ControlLeftAltRight
  | ControlRightAltLeft
  | ControlRightAltRight
  | ControlLeftShiftLeft
  | ControlRightShiftRight
  | ControlLeftShiftRight
  | ControlRightShiftLeft
  | AltLeftShiftLeft
  | AltRightShiftRight
  | AltRightShiftLeft
  | AltLeftShiftRight
  | "KeyW";

export default function useFastKey(
  combo: HotKey | HotKey[],
  funcion: VoidFunction,
  deps?: DependencyList
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(funcion, deps ? deps : []);
  return useHotkey(combo.toString(), true, callback);
}
