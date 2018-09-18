import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ICard } from '../../interfaces';

@Component({
    selector: 'app-deck-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @ViewChild('cardDiv') cardDiv;
    @Input() public card: ICard;
    @Input() public show: boolean;
    @Input() public index: number;

    constructor() { }

    public ngOnInit(): void {
        this.cardDiv.nativeElement.style.zIndex = this.index;
    }

    public mouseover(): void {
        this.cardDiv.nativeElement.style.zIndex = 1000;
    }

    public mousout(): void {
        this.cardDiv.nativeElement.style.zIndex = this.index;
    }
}
