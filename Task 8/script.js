/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.sum = function () {

    const add = this.a + this.b;
    return add;
}

Calculator.prototype.subtraction = function () {

    const subtract = this.a - this.b;
    return subtract;
}

Calculator.prototype.multiplication = function () {

    const multiplicate = this.a * this.b;
    return multiplicate
}

Calculator.prototype.division = function () {

    const divide = this.a / this.b;
    return divide;
}

const suma = new Calculator(2, 3)
const atimtis = new Calculator(5, 8)
const daugyba = new Calculator(3, 3)
const dalyba = new Calculator(12, 4)


console.log(suma.sum())
console.log(atimtis.subtraction())
console.log(daugyba.multiplication())
console.log(dalyba.division())