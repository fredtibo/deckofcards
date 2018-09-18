import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../interfaces';

@Component({
    selector: 'app-deck-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    
    @Input() public card: ICard;
    @Input() public show: boolean;
    @Input() public index: number;

    constructor() { }

    public ngOnInit(): void {
    }
}
