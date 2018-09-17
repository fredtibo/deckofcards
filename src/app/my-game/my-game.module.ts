import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGameRoutingModule } from './my-game.routing';
import { DeckModule } from '../deck/deck.module';
import { MyGameComponent } from './components/my-game.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        MyGameRoutingModule,
        DeckModule,
        TranslateModule
    ],
    declarations: [
        MyGameComponent
    ]
})
export class MyGameModule { }
