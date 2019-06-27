import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

export { AuthGuard };

@NgModule()
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthGuard
      ],
    };
  }
}
