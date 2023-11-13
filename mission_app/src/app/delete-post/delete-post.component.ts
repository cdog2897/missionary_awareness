import { Component } from '@angular/core';
import { PostService } from '../service/post_service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent {

  postId: number = 0;
  constructor(private service: PostService) {}

  deletePost(): void {
    this.service.deletePost(this.postId, () => {
      console.log("Post deleted successfully");
    })
  }

}
