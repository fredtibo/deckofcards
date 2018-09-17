import { Component, OnInit } from '@angular/core';
import { Deck } from '../../deck/classes';

@Component({
    templateUrl: './my-game.component.html'
})

export class MyGameComponent implements OnInit {

    private deck: Deck = new Deck();

    constructor() { 
    }

    public ngOnInit(): void { 
        console.log(this.deck);
    }
}