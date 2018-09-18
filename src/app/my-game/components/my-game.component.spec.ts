import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';
import { CardComponent } from '../../deck/components/card/card.component';
import { DeckComponent } from '../../deck/components/deck/deck.component';
import { SharedModule } from '../../shared/shared.module';
import { MyGameComponent } from './my-game.component';

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
                })]
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
        component.shuffle();
        expect(component.dealOneCard() !== null).toBeTruthy();
    });


    it('should be all shuffled', () => {
        component.shuffle();
        for (let i = 0; i < 52; i++) {
            component.dealOneCard();
        }
        expect(component.dealedCards.length == 52).toBeTruthy();
    });
});
