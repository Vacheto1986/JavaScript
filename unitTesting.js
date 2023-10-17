const { movieTheater } = require('./movieTheatre');

const expect = require('chai').expect;



describe('movieTheater', () => {

    describe('ageRestrictions', () => {

        it('check if value is eq to G and return the correct output', () => {
            expect(movieTheater.ageRestrictions('G')).to.eq('All ages admitted to watch the movie')
        });
        it('check if value is PG and return the correct output', () => {
            expect(movieTheater.ageRestrictions('PG')).to.eq('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });
        it('check if value is R and return the correct output', () => {
            expect(movieTheater.ageRestrictions('R')).to.eq('Restricted! Under 17 requires accompanying parent or adult guardian')
        });
        it('check if value is NC-17 and return the correct output', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.eq('No one under 17 admitted to watch the movie')
        });
        it('in any other case should return appropriate value', () => {
            expect(movieTheater.ageRestrictions('Z')).to.eq('There are no age restrictions for this movie')
        });

    });

    describe('moneySpent', () => {

        it('total cost of tickets without discount', () => {
            expect(movieTheater.moneySpent(1, ['Popcorn'], ['Soda'])).to.eq(`The total cost for the purchase is 22.00`)
        });
        it('total cost of tickets with discount', () => {
            expect(movieTheater.moneySpent(5, ['Popcorn'], ['Soda'])).to.eq(`The total cost for the purchase with applied discount is 65.60`)
        });
        it('validate input type for ticket count', () => {
            () => expect(movieTheater.moneySpent('a', ['Nachos'], ['Soda'])).to.throw('Invalid input')
        });
        it('validate input type for food array', () => {
            () => expect(movieTheater.moneySpent(1, 'b', ['Soda'])).to.throw('Invalid input')
        });
        it('validate input type for ticket count', () => {
            () => expect(movieTheater.moneySpent(1, ['Nachos'], 'c')).to.throw('Invalid input')
        });

    });

    describe('reservation', () => {

        it('validate input type for rowsArray', () => {
            () => movieTheater.reservation('a', 2).to.throw('Invalid input')
        });
        it('validate input type for neededSeatsCount', () => {
            () => movieTheater.reservation([], 'adssad').to.throw('Invalid input')
        });
        it('validate the return for a row with empty seat', () => {
            expect(movieTheater.reservation(
                [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],
                1))
                .to.eq(2)
        });
    });
});