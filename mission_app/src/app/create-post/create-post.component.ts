import { Component } from '@angular/core';
import { Post } from "../../../../Mission API/_posts/post.model";
import { PostService } from '../service/post_service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

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

  submitPost(post: Post): void {
    this.service.createPost(post, () => {
      console.log('Post created successfully');
    });
  }


}
