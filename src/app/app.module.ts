import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { CurrencyPickerComponent } from "./components/currency-picker/currency-picker.component";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { DataPickerComponent } from "./components/data-picker/data-picker.component";
import { ChartComponent } from "./components/chart/chart.component";

// Material modules
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    CurrencyPickerComponent,
    DatePickerComponent,
    DataPickerComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
