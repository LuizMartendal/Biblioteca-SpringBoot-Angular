import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './view/auth/auth.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: AuthComponent, canActivate: []
  },
  {
    path: 'user',
    loadChildren: () => import('./view/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./view/book/book.module').then(m => m.BookModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }