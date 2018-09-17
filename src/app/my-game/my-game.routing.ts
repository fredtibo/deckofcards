import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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