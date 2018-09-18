import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PreferenceService } from '../shared/services/preferences.service';

@Component({
    templateUrl: 'full-layout.component.html',
    styleUrls: ['./full-layout.component.css']
})

export class FullLayoutComponent {
    constructor(private translateService: TranslateService, private preferenceService: PreferenceService) { }

    public changeLanguage(language: string): void {
    this.preferenceService.setLanguage(language);
    this.translateService.use(language)
			.subscribe();
}
}