import { FeatherModule } from 'angular-feather';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';

import { IconsRoutes } from './icons.routing';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { SimplelineComponent } from './simpleline/simpleline.component';
import { MaterialComponent } from './material/material.component';
import { FeatherComponent } from './feather/feather.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(IconsRoutes), FormsModule, FeatherModule],
  declarations: [FontawesomeComponent, SimplelineComponent, MaterialComponent, FeatherComponent]
})
export class IconsModule {}
