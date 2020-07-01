import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { VirusSpecificationComponent } from './components/virus-specification/virus-specification.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SymptomAnalysisComponent } from './components/symptom-analysis/symptom-analysis.component'
import { UserGuard } from './guards/user_guard';
import { AdminGuard } from './guards/admin_guard';
import { AddminComponent } from './components/addmin/addmin.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'user/home', component: HomeUserComponent, canActivate:[UserGuard]},
  { path: 'admin/home', component: HomeUserComponent, canActivate:[AdminGuard]},
  { path: 'guest/home', component: HomeUserComponent},
  { path: 'user/change-password', component: ChangePasswordComponent, canActivate:[UserGuard]},
  { path: 'admin/change-password', component: ChangePasswordComponent, canActivate:[AdminGuard]},
  { path: 'user/symptom-analysis', component: SymptomAnalysisComponent, canActivate:[UserGuard]},
  { path: 'admin/manage', component: AddminComponent, canActivate:[AdminGuard]},
  { path: 'admin/usrs', component: AdminUsersComponent, canActivate:[AdminGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeUserComponent,
    VirusSpecificationComponent,
    ChangePasswordComponent,
    SymptomAnalysisComponent,
    AddminComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSnackBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatBadgeModule,
    MatTabsModule,
    MatChipsModule
  ],
  providers: [
    UserService,
    UserGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
