import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PreferenceService } from './shared/services/preferences.service';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers:[TranslateService, PreferenceService],
            imports: [RouterTestingModule, HttpClientModule, SharedModule, TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient, ]
                }
            })]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
