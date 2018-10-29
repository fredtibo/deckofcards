import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourGameComponent } from './components/your-game/your-game.component';
import { YourGameRoutingModule } from './your-game.routing';

@NgModule({
  imports: [
    CommonModule,
    YourGameRoutingModule
  ],
  declarations: [YourGameComponent]
})
export class YourGameModule { }
