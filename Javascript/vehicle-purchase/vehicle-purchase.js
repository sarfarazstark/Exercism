export function needsLicense(kind) {
  return (kind === 'car' || kind === 'truck') ? true: false;
}
export function chooseVehicle(option1, option2) {
  const sentence = " is clearly the better choice.";
  if (option1 > option2){
      return `${option2}${sentence}`;
  } else {
      return `${option1}${sentence}`;
  }
}
export function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
         return originalPrice * 0.8;
     } else if (age >= 3 && age <= 10) {
         return originalPrice * 0.7;
     } else {
         return originalPrice * 0.5;
     }
}
