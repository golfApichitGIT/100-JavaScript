//bed
function greetMorning(fullname) {
  return "good morning" + fullname;
}
function greetEvening(fullname) {
  return "good evening" + fullname;
}

//good
function greet(timeOfDay, fullname) {
    return `good ${timeOfDay} ${fullname}`;
}
console.log(greet('morning','Golf'));
console.log(greet('evening','NaKey'));