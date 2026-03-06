import { Routes } from '@angular/router';
import { Upload } from './components/upload/upload';
import { Home } from './components/home/home';
import { GaleryComponent } from './components/galery-component/galery-component';

export const routes: Routes = [
    { path: 'photos', component: Upload },
    { path: '', component: Home }, 
{
  path: 'gallery',
  component: GaleryComponent,
  runGuardsAndResolvers: 'always'
}    
];
