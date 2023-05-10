import { Component } from '@angular/core';
import { Thread } from '../../../Entity/Thread';
import { Comment } from '../../../Entity/Comment';
import { User } from '../../../Entity/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ThreadService } from '../../../Service/Thread.Service';
import { Router } from '@angular/router';
import { SlideOutComponent } from '../../e-commerce/slide-out/slide-out.component';


@Component({
  selector: 'ngx-create-thread',
  templateUrl: './createThread.component.html',
  styleUrls: ['./createThread.component.scss'],
})
export class CreateThreadComponent  {
  threadForm: FormGroup;
  thread: Thread;
  users: User[] = []; // populate this with actual data
  comments: Comment[] = []; // populate this with actual data
  threadLimitReached = false;


  constructor(private fb: FormBuilder, private toastrService: NbToastrService,private th:ThreadService,private router:Router) { }

  ngOnInit() {
    this.thread = new Thread();
    this.createForm();
  }

  createForm() {
    this.threadForm = this.fb.group({
      title: [this.thread.gettitle(), Validators.required],
      content: [this.thread.getcontent(), Validators.required],



    });
  }

  submitForm() {
    console.log( "form");
    if (this.threadForm.valid) {
     
      this.thread.settitle(this.threadForm.value.title);
      this.thread.setcontent(this.threadForm.value.content);

      let userID = sessionStorage.getItem('id')
      let user:User = new User(parseInt(userID)); //userID
      this.thread.setthreadCreator(user);
      console.log( this.thread);
this.th.createThread(this.thread).subscribe((data) => {

  this.router.navigate(['/pages/tables/smart-tableFront']);

  this.toastrService.success('Thread submitted successfully', 'Success');
},



   error => {
   
  if (error.status === 500 && error.error.message === 'You reach the limit of posts.') {
    this.threadLimitReached = true;
    this.toastrService.danger('You have reached the limit : 10 Posts', 'Error');

  }
}
)

    } else {
      this.toastrService.danger('Please fill all required fields', 'Error');
    }
  }
}
