import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../Mission API/_posts/post.model';
import { PostService } from '../service/post_service';

@Component({
  selector: 'app-read-posts',
  templateUrl: './read-posts.component.html',
  styleUrls: ['./read-posts.component.css']
})

export class ReadPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    console.log("getting data...");
    this.service.getPosts((posts: Post[]) => {
      this.posts = posts;
    });
  }


}
