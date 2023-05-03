import { Component, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../../../Service/Thread.Service';
import { ThreadTagEntity } from '../../../Entity/ThreadTag';
import { Thread } from '../../../Entity/Thread';
import { SharedDataService } from '../../../Service/SharedDataService ';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-commentSectionComponent',
  templateUrl: './commentSection.component.html',
  styleUrls: ['./commentSection.component.scss'],
})
export class CommentSectionComponent   {
  @Input() threadData: any;

  newComment = '';

  constructor(private toastrService: NbToastrService) {
    console.log(this.threadData);
  }

  addComment() {
    if (this.newComment.trim() === '') {
      this.toastrService.warning('Please enter a comment');
      return;
    }

    const newComment = {
      content: this.newComment,
      commenter: { nom: 'John Doe', imageLink: 'assets/images/john-doe.png' },
      date: new Date(),
    };

    this.threadData.comments.push(newComment);
    this.newComment = '';
    this.toastrService.success('Comment added successfully');
  }
}


