import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionListComponent } from "./pages/collection-list/collection-list.component";
// import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {
    path: "collection-list",
    component: CollectionListComponent
  },
  { path: "**", component: CollectionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
