/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentDay = 40;

  if (days >= 3 && days <= 6) {
    return days * rentDay - 20;
  } else if (days >= 7) {
    return days * rentDay - 50;
  } else {
    return days * rentDay;
  }
}

module.exports = calculateRentalCost;
