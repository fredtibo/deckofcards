import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	// tslint:disable-next-line
	selector: 'body',
	template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
	constructor(private translate: TranslateService) {
	}

	public ngOnInit(): void {
		this.translate.setDefaultLang('en_US');
		this.translate.use('en_US')
			.subscribe(_ => {
			});
	}
}
