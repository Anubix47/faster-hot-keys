/* 
 * Code copied and modified from
 * the react-hotkey-hook module. By Anubix47 
 * */

import { useEffect } from "react";

const useHotkey = (hotkeys: string, override = true, callback: () => void) => {
  // Handle undefined array
  if (!hotkeys)
    throw new Error(
      "The first parameter to `useHotkey` must contain atleast one `KeyboardEvent.key` string."
    );

  // Handle incorrect callback
  if (!callback || typeof callback !== "function")
    throw new Error(
      "The second parameter to `useHotkey` must be a function that will be envoked when the keys are pressed."
    );

  // Array of keys needed to be pressed
  const hotkeys_arr = hotkeys.split("+").sort();

  // List of current keys pressed
  let keysPressed: string[] = [];

  // Handle key down event
  const handleKeyDown = (event: KeyboardEvent) => {
    if (keysPressed.includes(event.code)) return false;

    keysPressed.push(event.code);

    // Reset if number of hotkeys exceeds required amount
    if (keysPressed.length > hotkeys_arr.length) {
      keysPressed = [];
      return false;
    }

    // Overides any previous keyboard shortcut if overide is true
    if (override) {
      if (keysPressed.length < hotkeys_arr.length && keysPressed.length > 1) {
        if (
          JSON.stringify(hotkeys_arr.slice(0, keysPressed.length)) ===
          JSON.stringify(keysPressed.sort())
        ) {
          event.preventDefault();
        }
      }
    }

    // Compare arrays for hotkey match
    if (JSON.stringify(hotkeys_arr) === JSON.stringify(keysPressed.sort())) {
      if (override) {
        // prevent default if overide is true

        event.preventDefault();
      }
      // run callback function
      callback();
    }

    return;
  };

  // Handle key up event
  const handleKeyUp = (event: KeyboardEvent) => {
    const index = keysPressed.indexOf(event.code);
    if (index > -1) {
      keysPressed.splice(index, 1);
    }

    return;
  };

  // Key down event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, false);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  // Key up event listener
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return null;
};

export default useHotkey;
