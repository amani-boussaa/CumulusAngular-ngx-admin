import { Component } from '@angular/core';
import { Thread } from '../../../Entity/Thread';
import { Comment } from '../../../Entity/Comment';
import { User } from '../../../Entity/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ThreadService } from '../../../Service/Thread.Service';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-createThread',
  templateUrl: './createThread.component.html',
  styleUrls: ['./createThread.component.scss'],
})
export class CreateThreadComponent  {
  threadForm: FormGroup;
  thread: Thread; 
  users: User[] = []; // populate this with actual data
  comments: Comment[] = []; // populate this with actual data

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
    if (this.threadForm.valid) {
      this.thread.settitle(this.threadForm.value.title);
      this.thread.setcontent(this.threadForm.value.content);
      
       let user:User = new User(1);
this.thread.setthreadCreator(user);
this.th.createThread(this.thread).subscribe((data) => {
     
  this.router.navigate(['/pages/viewThreadDetail']);
  
  
});;;
      
      // and handle success/error
      this.toastrService.success('Thread submitted successfully', 'Success');
    } else {
      this.toastrService.danger('Please fill all required fields', 'Error');
    }
  }
}
 