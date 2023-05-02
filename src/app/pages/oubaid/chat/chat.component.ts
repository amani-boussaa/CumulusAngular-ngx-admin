import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ngx-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  chatForm: FormGroup;
  chatObj: Chat = new Chat();
  messageObj: Message = new Message();
  // chatId: number = 22;
  public messageList: any = [];
  public chatList: any = [];
  replymessage: String = "checking";
  public chatData: any;
  msg = "Good work";
  chatId: any = sessionStorage.getItem('chatId');
  color = "";
  alluser: any[] = [];
  filteredUsers: any[] = [];
  secondUserName = "";
  errorMessage: string = '';

  check = sessionStorage.getItem('username');
  timesRun = 0;
  timesRun2 = 0;

  firstUserName = sessionStorage.getItem('username');
  senderEmail = sessionStorage.getItem('email');
  senderCheck = sessionStorage.getItem('username');
  emojis: string[] = ["😀", "😂", "😍", "👍", "👎"];


  constructor(private chatService: ChatService, private router: Router, private userService: UserService, private cdr: ChangeDetectorRef) {
    this.chatForm = new FormGroup({
      replymessage: new FormControl()
    });

  }
  

  ngOnInit(): void {
    sessionStorage.setItem('id', '1');
    sessionStorage.setItem('username', 'alicesmith');
    sessionStorage.setItem('email', 'alice@example.com');

    this.chatService.getChatByFirstUserNameOrSecondUserName(this.firstUserName).subscribe(data => {
      this.chatList = data;
  
      // Sort the chats by last message sent
      this.chatList.sort((a, b) => {
        const aLastMessage = a.messageList[a.messageList.length - 1];
        const bLastMessage = b.messageList[b.messageList.length - 1];
        return bLastMessage.timestamp - aLastMessage.timestamp;
      });
    });

    setInterval(() => {
      this.chatService.getChatById(sessionStorage.getItem('chatId')).subscribe(data => {
        this.chatData = data;
        this.messageList = this.chatData.messageList;
        this.secondUserName = this.chatData.secondUserName;
        this.firstUserName = this.chatData.firstUserName;
      });
    },
     1000);
     

      let getByname = setInterval(() => {
        // For getting all the chat list whose ever is logged in.
        this.chatService.getChatByFirstUserNameOrSecondUserName(this.firstUserName).subscribe(data => {
          // console.log(data);
          this.chatData = data;
          this.chatList = this.chatData;
        });

      this.timesRun2 += 1;
      if (this.timesRun2 === 2) {
        clearInterval(getByname);
      }
    }, 1000);

      let all = setInterval(() => {
       this.userService.getAll().subscribe((data) => {
          //  console.log(data);
          this.alluser = data;
          this.filteredUsers = this.alluser.filter(user => user.username !== this.check);
       })


      this.timesRun += 1;
      if (this.timesRun === 2) {
        clearInterval(all);
      }
    }, 1000);


  }

  loadChatByEmail(event: string, event1: string) {
    console.log(event, event1);

    // For removing the previous chatId
    sessionStorage.removeItem("chatId");
    //console.log(event, event1,"hello")

    // For checking the chat room by both the emails , if there is present then it will give the chat Id in sessionStorage
    this.chatService.getChatByFirstUserNameAndSecondUserName(event, event1).subscribe(data => {
       console.log('this is the data ',data);
      this.chatData = data;
      this.chatId = data[0].chatId;
      console.log(this.chatId);
      sessionStorage.setItem('chatId', this.chatId)

      setInterval(() => {
        this.chatService.getChatById(this.chatId).subscribe(data => {
          this.chatData = data;
          this.messageList = this.chatData.messageList;
          this.secondUserName = this.chatData.secondUserName;
          this.firstUserName = this.chatData.firstUserName;
        });
      }, 1000)

    });

  }

  addEmoji(emoji: string) {
    const messageControl = this.chatForm.get('replymessage');
    messageControl.setValue(`${messageControl.value}${emoji}`);
  }
  sendMessage() {
    const message = this.chatForm.value.replymessage;
    
    // Retrieve list of bad words from backend
    this.chatService.getBadWords().subscribe((badWords) => {
      if (this.checkForBadWords(message, badWords)) {
        // Display error to user if bad words are found
        this.errorMessage = 'Your message contains inappropriate language. Please remove it before sending.';
      } else {
        // Proceed with sending the message
        this.errorMessage = '';
        const messageObj = new Message();
        messageObj.chatId = this.chatId;
        messageObj.senderCheck = this.senderCheck;
        //console.log('this is the sendercheck',this.senderCheck)
        messageObj.message = message;
        messageObj.senderEmail = this.senderEmail;
        messageObj.replymessage = message;
        this.chatService.updateChat(messageObj, this.chatId).subscribe((data) => {
          console.log(data);
          this.chatForm.reset();
  
          // for displaying the messageList by the chatId
          this.chatService.getChatById(this.chatId).subscribe((data) => {
            this.chatData = data;   
            this.secondUserName = this.chatData.secondUserName;
            this.firstUserName = this.chatData.firstUserName;
  
            // sort the message list by timestamp in ascending order
            this.messageList = this.chatData.messageList.sort((a, b) => a.timestamp - b.timestamp);
          });
  
        });
      }
    });
  }
  
  // Helper function to check if message contains any bad words
  checkForBadWords(message: string, badWords: any[]): boolean {
    for (let i = 0; i < badWords.length; i++) {
      if (message.toLowerCase().includes(badWords[i].word.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  
  

  handleAttachment(event: any) {
    const file = event.target.files[0];
    // do something with the file, such as upload it to a server or display its preview
  }
  
  
  

  routeHome() {
    this.router.navigateByUrl('');
  }
  

//remove johndoe after setting up the amani part (user modul)
  goToChat(username: any) {
    console.log('hello')
    this.chatService.getChatByFirstUserNameAndSecondUserName(username,  sessionStorage.getItem("username")).subscribe(
      (data) => {
        this.chatId = data[0].chatId;
        console.log('this is teh chat id ',this.chatId);
        sessionStorage.setItem("chatId", this.chatId);
      },
      (error) => {
        if (error.status == 404) {
          this.chatObj.firstUserName = sessionStorage.getItem("username");
          this.chatObj.secondUserName = username;
          this.chatService.createChatRoom(this.chatObj).subscribe(
            (data) => {
              this.chatData = data;
              this.chatId = this.chatData.chatId;
              sessionStorage.setItem("chatId", this.chatData.chatId);
            })
        } else {

        }
      });

  }

  filterUsers(query: string) {
    if (!query) {
      // if search query is empty, show all users
      this.filteredUsers = this.alluser;
    } else {
      // filter the users based on the search query
      this.filteredUsers = this.alluser.filter(user => user.username.toLowerCase().includes(query.toLowerCase()));
    }

  }

   openZoom() {
      window.open('/pages/meeting', '_blank');
    }
}