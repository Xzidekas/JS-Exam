/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {

    constructor(title, director, budget) {
        this.title = String(title);
        this.director = String(director);
        this.budget = Number(budget);
    }

    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        }
        else {
            return false;
        }
    }
}

const mov = new Movie('x', 'y', 120000000)

console.log(mov.wasExpensive())