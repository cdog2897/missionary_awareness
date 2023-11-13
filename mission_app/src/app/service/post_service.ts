import { Injectable } from "@angular/core";
import { Post } from "../../../../Mission API/_posts/post.model";
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: 'root'})
export class PostService {

  private host = "http://localhost:5000";
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  public getPosts(callback: (posts: Post[]) => void) : void {
    this.http.get<Post[]>(this.host + "/posts")
      .subscribe((posts: Post[]) => {
        callback(posts);
      })
  }

  public createPost(post: Post, callback: () => void): void {
    this.http.post<Post>(this.host + "/posts", post)
      .subscribe((data) => {
        callback();
      });
  }

  public updatePost(post: Post, callback: () => void): void {
    this.http.put<Post>(this.host + "/posts", post)
      .subscribe((data) => {
        callback();
      });
  }

  public deletePost(id: number, callback: () => void): void {
    this.http.delete(this.host + "/posts/" + id)
      .subscribe((data) => {
        callback();
      });
  }

}
