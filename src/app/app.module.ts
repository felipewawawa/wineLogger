import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GridComponent } from './main/grid/grid.component';
import { SideBarComponent } from './main/side-bar/side-bar.component';
import { CardComponent } from './main/grid/card/card.component';
import { SearchBarPipe } from './main/grid/search-bar.pipe';
import { FormComponent } from './main/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GridComponent,
    SideBarComponent,
    CardComponent,
    SearchBarPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient)=>{
              return new TranslateHttpLoader(http);
            },
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
