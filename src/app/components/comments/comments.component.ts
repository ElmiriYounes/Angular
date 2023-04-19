import { Component } from '@angular/core';
import { comments } from 'src/constants/comments';
import { IComment } from 'src/interfaces/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  comments: IComment[] = comments;
}
