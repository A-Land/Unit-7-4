const day = 'Monday'
const age = 37
if ((day === 'Tuesday' || day === 'Thursday') || (age > 12 && age < 21)) {
  console.log("You're eligible for student pricing!")
} else {
  console.log('You must pay regular price.')
}
