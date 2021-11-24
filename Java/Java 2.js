let a = 17.4;
let b = 3.9;

let result = a / b;

console.log("The result of " + a + " divided by " + b + " is " + result);

let firstname = "Mihai";
let lastname = "Muscalu";

console.log("Ich heiße " + firstname + " " + lastname);

for (let count = 7; count < 45; count++) {
    console.log(count);
}
for (let count = 9; count < 99; count++) {
    console.log(count);
}
for (let count = 10; count > 0; count--) {
    console.log(count);
}
for (let count = 1234; count > 1206; count--) {
    console.log(count);
}
for (let count = 0; count < 8; count++) {
    console.log("Mihai");
}
for (let count = 0; count < 11; count++) {
    console.log(count);

    if (count >= 10) {
        console.log("Mihai")
        for (let count = 10; count > 0; count--) {
            console.log(count);
        }
    }

}