import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import { UseramaniService } from '../../../services/amani/useramani.service';
import { Subscription } from 'rxjs';
import { Wallet } from '../../payment/Wallet/model/wallet';
import { WalletService } from '../../payment/Wallet/service/wallet.service';

@Component({
  selector: 'ngx-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatForm: FormGroup;
  chatObj: Chat = new Chat();
  messageObj: Message = new Message();
  attachmentFile: File | null = null;

  // chatId: number = 22;
  public messageList: any = [];
  public chatList: any = [];
  replymessage: String = "checking";
  public chatData: any;
  msg = "Good work";
  chatId: any = sessionStorage.getItem('chatId');
  color = "";
  // alluser: any[] = [];
  alluser:any;
  filteredUsers: any[] = [];
  secondUserName = "";
  errorMessage: string = '';

  check = sessionStorage.getItem('username');
  timesRun = 0;
  timesRun2 = 0;
  wallet: Wallet;

  private chatSubscription: Subscription;



  firstUserName = sessionStorage.getItem('username');
  senderEmail = sessionStorage.getItem('username');
  senderCheck = sessionStorage.getItem('username');
  emojis: any = ["😀", "😂", "😍", "👍", "👎"];


  constructor(private us: UseramaniService ,private chatService: ChatService,
    private walletservice: WalletService, private router: Router) {
    this.chatForm = new FormGroup({
      replymessage: new FormControl()
    });

  }
  ngOnInit(): void {
    console.log("test amani....")
    this.walletservice.getWalletOfUser().subscribe(
      wallet => {
        this.wallet = wallet;
        console.log(this.wallet);
      },
      error => {
        console.log('An error occurred while retrieving wallet information.');
      }
    );
    setInterval(() => {
      this.chatService.getChatById(sessionStorage.getItem('chatId')).subscribe(data => {
        this.chatData = data;
        this.messageList = this.chatData.messageList;
        this.secondUserName = this.chatData.secondUserName;
        this.firstUserName = this.chatData.firstUserName;
      });
    }, 1000);

    // Fetch chat list
    setInterval(() => {
      this.chatService.getChatByFirstUserNameOrSecondUserName(sessionStorage.getItem('username')).subscribe(data => {
        this.chatList = data;
      });
    }, 1000);

    let all = setInterval(() => {
      this.us.getAllusers().subscribe((data) => {
        this.alluser = data;
        this.filteredUsers = this.alluser.filter(user => user.username !== this.check);
      })
      this.timesRun += 1;
      if (this.timesRun === 2) {
        clearInterval(all);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }

  loadChatByEmail(event: string, event1: string) {
    console.log(event, event1);
    // For removing the previous chatId
    sessionStorage.removeItem("chatId");

    // For checking the chat room by both the emails , if there is present then it will give the chat Id in sessionStorage
    this.chatService.getChatByFirstUserNameAndSecondUserName(event, event1).subscribe(data => {
      // console.log(data);
      this.chatData = data;
      this.chatId = this.chatData[0].chatId;
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

  sendMessage() {
    const message = this.chatForm.value.replymessage;
    const attachment = this.attachmentFile;
    // Retrieve list of bad words from backend
    this.chatService.getBadWords().subscribe((badWords) => {
      if (this.checkForBadWords(message, badWords)) {
        // Display error to user if bad words are found
        this.errorMessage = 'Your message contains inappropriate language. Please remove it before sending.';
      } else {
        // Proceed with sending the message
        const messageObj = {
          chatId: this.chatId,
          senderCheck: this.senderCheck,
          message: message,
          senderEmail: this.senderEmail,
          replymessage: message,
        };

        if (attachment) {
          messageObj['attachment'] = attachment;
        }

        this.chatService.updateChat(messageObj, this.chatId).subscribe((data) => {
          console.log(data);
          this.chatForm.reset();
          this.attachmentFile = null;

          // for displaying the messageList by the chatId
          this.chatService.getChatById(this.chatId).subscribe((data) => {
            this.chatData = data;
            this.messageList = this.chatData.messageList;
            this.secondUserName = this.chatData.secondUserName;
            this.firstUserName = this.chatData.firstUserName;

          });

        });
      }
    });
  }


  handleAttachment(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      this.attachmentFile = target.files[0];
    }
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

  addEmoji(emoji: string) {
    const messageControl = this.chatForm.get('replymessage');
    messageControl.setValue(`${messageControl.value}${emoji}`);
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
