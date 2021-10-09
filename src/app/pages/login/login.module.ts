import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgParticlesModule } from 'ng-particles';

import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconsProviderModule } from '../../icons-provider.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NzButtonModule,
    IconsProviderModule,
    NgParticlesModule,
  ],
})
export class LoginModule {}
