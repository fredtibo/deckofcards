import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../interfaces';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() public card: ICard;
    @Input() visible: boolean;

    constructor() { }

    public ngOnInit(): void {
    }
}
