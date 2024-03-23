var hoursOfSleep = Number(
    prompt("How many hours of sleep did you get? (ex. 8 for 8 hours)"));

    if (hoursOfSleep > 12) {
    console.log("Be truthful and try again :)");
} else if (hoursOfSleep >= 8) {
    console.log("Congratulations on a good night sleep!");
} else if (hoursOfSleep >= 5) {
    console.log("Pretty good, but you should consider getting more sleep.");
} else {
    console.log("You need to get more sleep.");
}