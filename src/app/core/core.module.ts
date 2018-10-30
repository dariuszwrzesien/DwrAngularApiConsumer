import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { TrackByService } from './trackby.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';

import { DataService } from './data.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [ DataService, TrackByService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}



