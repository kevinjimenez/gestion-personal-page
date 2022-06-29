import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalManagementRoutingModule } from './personal-management-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    SkillComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PersonalManagementRoutingModule,
    SharedModule,
  ],
})
export class PersonalManagementModule { }
