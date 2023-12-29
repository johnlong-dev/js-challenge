export default function validParens({ parens }) {
  const stack = [];
  const closedToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] in closedToOpen) {
      if (stack && stack.at(-1) === closedToOpen[parens[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(parens[i]);
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
