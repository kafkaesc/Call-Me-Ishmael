import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HtmlTagPipe } from './core/pipes/html-tag.pipe';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NoTabindexComponent } from './no-tabindex/no-tabindex.component';
import { E404Component } from './shared/components/e404/e404.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { SpecsComponent } from './specs/specs.component';
import { SpeechBubbleComponent } from './speech-bubble/speech-bubble.component';

const routes: Routes = [
	{ path: '', redirectTo: 'Home', pathMatch: 'full' },
	{
		path: '',
		component: MainComponent,
		children: [
			{ path: 'Home', component: HomeComponent },
			{ path: 'About', component: AboutComponent },
			{ path: 'Specs', component: SpecsComponent },
			{ path: 'NoTabindex', component: NoTabindexComponent },
		],
	},
	{ path: '**', component: E404Component },
];

@NgModule({
	declarations: [
		AboutComponent,
		AppComponent,
		E404Component,
		HomeComponent,
		HtmlTagPipe,
		MainComponent,
		NoTabindexComponent,
		SpeechBubbleComponent,
		SpecsComponent,
		TopBarComponent,
	],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
