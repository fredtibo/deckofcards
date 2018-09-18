import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGameComponent } from './components/my-game.component';

export const routes: Routes = [
	{
		path: '',
		component:  MyGameComponent
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MyGameRoutingModule { }