import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferenceService } from './services/preferences.service';

@NgModule({
	imports: [
        CommonModule
    ],
    providers:[
        PreferenceService
    ],
    exports: [
    ]
})
export class SharedModule { }