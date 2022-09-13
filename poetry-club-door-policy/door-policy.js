export function frontDoorResponse(line) {
  const lineWithoutWhiteSpace = line.trim();
  return lineWithoutWhiteSpace[0];
}

export function frontDoorPassword(word) {
   const result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
   return result;
}

export function backDoorResponse(line) {
  const lineWithoutWhiteSpace = line.trim();
  return lineWithoutWhiteSpace[lineWithoutWhiteSpace.length - 1];
}

export function backDoorPassword(word) {
     const result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
     return result + ", please"
}
