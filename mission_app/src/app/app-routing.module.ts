import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadPostsComponent } from './read-posts/read-posts.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

const routes: Routes = [
  { path: 'read', component: ReadPostsComponent },
  { path: 'update', component: UpdatePostComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'delete', component: DeletePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
