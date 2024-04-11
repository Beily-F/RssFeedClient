import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  postList: any[] = [];
  selectedPost: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.http.get<any>('https://localhost:7004/titles').subscribe(
      (data) => {
        this.postList = Object.keys(data).map(key => ({ id: key, title: data[key] }));
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  fetchPost(postId: string): void {
    this.http.get<any>(`https://localhost:7004/post/${postId}`).subscribe(
      (data) => {
        this.selectedPost = data;
        if(this.selectedPost.description.startsWith('<'))
        {
          this.selectedPost.description=this.selectedPost.description.split('>')[1];
        }
      },
      (error) => {
        console.error('Error fetching post data:', error);
      }
      
    );
  }
}


