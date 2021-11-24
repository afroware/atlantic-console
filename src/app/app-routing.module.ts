import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config/config.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =
       [{ path: '', component: HomeComponent },
       { path: 'config', component: ConfigComponent },
         { path: 'account',
          loadChildren: () =>
          import('./modules/account/account.module').then(m => m.AccountModule)
        },
        { path: 'api',
        loadChildren: () =>
        import('./api/api.module').then(m => m.ApiModule)
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
