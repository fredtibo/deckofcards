import { Injectable } from '@angular/core';

@Injectable()
export class PreferenceService {

    constructor() { }

    public getLanguage(): string {
        return localStorage['language'] || 'en-US';
    }

    public setLanguage(language: string): void {
        localStorage['language'] = language;
    }
}