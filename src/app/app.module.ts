import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { E404Component } from './shared/components/e404/e404.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SpecsComponent } from './specs/specs.component';
import { SpeechBubbleComponent } from './speech-bubble/speech-bubble.component';
import { HtmlTagPipe } from './core/pipes/html-tag.pipe';

const routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '', component: MainComponent, children: [
        { path: 'Home', component: HomeComponent},
        { path: 'About', component: AboutComponent },
        { path: 'Specs', component: SpecsComponent }
    ] },
    { path: '**', component: E404Component }
];

@NgModule({
    declarations: [
        AppComponent,
        E404Component,
        HomeComponent,
        HtmlTagPipe,
        MainComponent,
        TopBarComponent,
        AboutComponent,
        SpecsComponent,
        SpeechBubbleComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
