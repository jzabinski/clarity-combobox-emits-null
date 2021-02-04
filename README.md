# ClarityCombobox

This is a demo of a bug where the Clarity combobox emits null when all input is removed from the combobox. To see the issue:

1. Download the repository.
2. `npm install`
3. `ng serve`
4. Open `localhost:4200/` on a browser.
5. You will see a combobox at the top left. Click the dropdown arrow to open the dropdown.
6. Choose something from the dropdown. Note that the combobox output is displayed to the right of the combobox. Example: choose 'ac', and 'ac' will appear to the right of the combobox.
7. While focused at the end of the combobox input, click Backspace. Notice that the input now displays 'a', and the combobox output does not change. (The dropdown continues to display with all results containing 'a'.) This shows that the combobox is likely designed to only emit output when one of the dropdown options is chosen.
8. Click Backspace again.

Notice that the combobox outputs `null`. `null` is not one of the available dropdown options.
