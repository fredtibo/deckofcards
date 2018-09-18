import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layouts';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'my-game',
		pathMatch: 'full'
	},
	{
		path: '',
		component: FullLayoutComponent,
		children: [
			{
				path: 'my-game',
				loadChildren: './my-game/my-game.module#MyGameModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }