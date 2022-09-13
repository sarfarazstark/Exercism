export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
     const remainDaysCost = dayRate(ratePerHour) * (numDays % 22);
     const totalMonthCost = dayRate(ratePerHour) * (numDays - numDays % 22);
     return Math.ceil((totalMonthCost - totalMonthCost * discount) + remainDaysCost);
}
