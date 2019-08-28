import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { FAQComponent } from './faq/faq.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'list/apps', component: ListComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'results/:type/:id', component: ResultsComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
