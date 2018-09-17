import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PreferenceService } from './shared/services/preferences.service';

@Component({
	// tslint:disable-next-line
	selector: 'body',
	template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
	constructor(private translate: TranslateService, private preferenceService: PreferenceService) {
	}

	public ngOnInit(): void {
		const language = this.preferenceService.getLanguage();

		this.translate.setDefaultLang(language);
		this.translate.use(language)
			.subscribe(_ => {
			});
	}
}
