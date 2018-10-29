import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourGameComponent } from './components/your-game/your-game.component';

export const routes: Routes = [
    {
        path: '',
        component: YourGameComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YourGameRoutingModule {}
