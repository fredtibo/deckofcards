import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../interfaces';

@Component({
    selector: 'app-deck',
    templateUrl: 'deck.component.html',
    styleUrls: ['./deck.component.css']
})
export class DeckComponent {
    @Input() public cards: Array<ICard>;
    @Input() public show: boolean;
}