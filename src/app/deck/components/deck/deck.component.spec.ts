import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckComponent } from './deck.component';
import { CardComponent } from '../card/card.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../../app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

describe('DeckComponent', () => {
    let component: DeckComponent;
    let fixture: ComponentFixture<DeckComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeckComponent, CardComponent],
            providers: [TranslateService],
            imports: [
                SharedModule,
                HttpClientModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
