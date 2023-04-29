import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent {

  async ngAfterContentInit(): Promise<any> {
    const { ZoomMtg } = await import('@zoomus/websdk');

    ZoomMtg.setZoomJSLib('https://source.zoom.us/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();

    let payload = {
      meetingNumber: '87375201930',
      passWord: 'jtfy0v',
      sdkKey: 'voqcpUQISgmZNOJc_0XTCw',
      sdkSecret: 'oi8sg3G32cyCsPbVSfsTNXaqDo360ClQ',
      userName: 'Cumulus',
      userEmail: '',
      role: '0',
      leaveUrl: 'http://localhost:4200/pages/message'
    };

    ZoomMtg.generateSDKSignature({
      meetingNumber: payload.meetingNumber,
      role: payload.role,
      sdkKey: payload.sdkKey,
      sdkSecret: payload.sdkSecret,
      success: function(signature) {
        ZoomMtg.init({
          leaveUrl: payload.leaveUrl,
          success: function(data: any) {
            ZoomMtg.join({
              meetingNumber: payload.meetingNumber,
              passWord: payload.passWord,
              sdkKey: payload.sdkKey,
              userName: payload.userName,
              userEmail: payload.userEmail,
              signature: signature.result,
              tk: '',
              success: function(data: any) {
                console.log(data);
              },
              error: function(error: any) {
                console.log('--- Error join -->', error);
              }
            })
          },
          error: function(error: any) {
            console.log('--- Error join -->', error);
          }
        })
      },
      error: function(error: any) {
        console.log('--- Error join -->', error);
      }
    })
  }
}
