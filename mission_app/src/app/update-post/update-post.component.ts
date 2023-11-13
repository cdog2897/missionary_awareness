import { Component } from '@angular/core';
import { Post } from "../../../../Mission API/_posts/post.model";
import { PostService } from '../service/post_service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent{

  post: Post = {
    postId: 0,
    userId: 0,
    username: '',
    caption: '',
    date: new Date(),
    img: ''
  };

  constructor(private service: PostService) {

  }

  updatePost(post: Post): void {
    this.service.updatePost(post, () => {
      console.log('Post updated successfully');
    });
  }


}
