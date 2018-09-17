import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './components/card/card.component';
import { DeckComponent } from './components/deck/deck.component';

@NgModule({
	imports: [
		CommonModule,
		TranslateModule
	],
	declarations: [CardComponent, DeckComponent],
	exports: [CardComponent, DeckComponent]
})
export class DeckModule { }