import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DeckModule } from '../deck/deck.module';
import { MyGameComponent } from './components/my-game.component';
import { MyGameRoutingModule } from './my-game.routing';

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
