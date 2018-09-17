import { ICard } from "../interfaces";
import { CardColor } from "../enums";
import { Observable, Subject } from "rxjs";

export class Deck {

    public cards: Array<ICard>;

    constructor() {}

    private initDeck(): void {
        this.cards = [];
        for (let color in CardColor) {
            for (let i = 1; i <= 13; i++) {
                this.cards.push({
                    color: color,
                    value: i
                })
            }
        }
    }

    public shuffle(): void {
        this.initDeck();
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }

    }

    public dealOneCard(): ICard{
        if( this.cards.length > 0){
            return this.cards.pop();
        }
        return null;
    }
}
