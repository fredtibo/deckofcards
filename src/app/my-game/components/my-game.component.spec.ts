import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGameComponent } from './my-game.component';
import { DeckComponent } from '../../deck/components/deck/deck.component';
import { CardComponent } from '../../deck/components/card/card.component';

import {
    RouterTestingModule
} from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';

describe('MyGameComponent', () => {
    let component: MyGameComponent;
    let fixture: ComponentFixture<MyGameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyGameComponent, DeckComponent, CardComponent],
            providers: [
                TranslateService
            ],
            imports: [ 
                RouterTestingModule,
                SharedModule,
                HttpClientModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                }) ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should shuffle', () => {
        const fixture = TestBed.createComponent(MyGameComponent);
        component = fixture.componentInstance;
        component.shuffle();
        expect(component.dealOneCard()!==null).toBeTruthy();
    });
});
