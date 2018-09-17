import { Component, OnInit } from '@angular/core';
import { Deck } from '../../deck/classes';
import { ICard } from '../../deck/interfaces';

@Component({
    templateUrl: './my-game.component.html'
})

export class MyGameComponent implements OnInit {

    private deck: Deck = new Deck();
    public dealedCards: Array<ICard> = [];

    constructor() {
    }

    public ngOnInit(): void {
    }

    public shuffle(): void {
        this.deck.shuffle();
        this.dealedCards = [];
    }

    public dealOneCard(): void {
        const card = this.deck.dealOneCard();
        if (card) {
            this.dealedCards.push(card);
        }
    }
}