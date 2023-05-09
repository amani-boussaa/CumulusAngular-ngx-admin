import { Component, OnInit } from '@angular/core';
import { UseramaniService } from '../../../services/amani/useramani.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../services/login/auth.service';
import Swal from 'sweetalert2';
import { WalletService } from '../../payment/Wallet/service/wallet.service';
import { Wallet } from '../../payment/Wallet/model/wallet';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'ngx-form-profile-amani',
  templateUrl: './form-profile-amani.component.html',
  styleUrls: ['./form-profile-amani.component.scss']
})
export class FormProfileAmaniComponent implements OnInit {
  userData = {
    id:"",
    name: "",
    username: "",
    email: "",
    institution:"",
    address:"",
    description:"",
    role:""
  };
  entity: any
  id: any
  imageData:any
  attributes = [
    { name: 'role', label: 'Role', required: true ,disabled:true},
    { name: 'name', label: 'Name', required: true,disabled:false },
    { name: 'username', label: 'Username', required: false,disabled:false },
    { name: 'email', label: 'Email', required: false,disabled:false },
    { name: 'institution', label: 'Institution', required: false,disabled:false },
    { name: 'description', label: 'Description', required: false,disabled:false },
    { name: 'address', label: 'Address', required: false,disabled:false },
  ];
  selectedFile: File = null;

  constructor( private us: UseramaniService,private http: HttpClient,private authservice : AuthService,
    private walletservice:WalletService) {}

  ngOnInit(): void {
    this.id = this.authservice.getLoggedInID()
    if (this.id!=null) {

    this.us.getOneuser(this.id).subscribe(

      (response: any) => {
        this.userData.id = response.id
        this.userData.name = response.name
        this.userData.username = response.username
        this.userData.email = response.email
        this.userData.institution = response.institution
        this.userData.description = response.description
        this.userData.address = response.address
        this.userData.role= response.role.replace("ROLE_", ""),

        this.entity = this.userData
      }
      , (err: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "We dont't found this user in our database!",
          footer: err.message
        });
      })

    }
    //image
    if (this.id != null) {
      ///get image user blob
      this.us.getImage(this.id).subscribe(
        (data: Blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            console.log("this.imageData",this.imageData)
            this.imageData = reader.result as string;
          };
          reader.readAsDataURL(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  onSubmit() {
    let updatedEntity = this.entity
    const id = this.id;
    const newprofile = {
      name: updatedEntity.name,
      username: updatedEntity.username,
      email: updatedEntity.email,
      institution: updatedEntity.institution,
      description: updatedEntity.description,
      address: updatedEntity.address,
    };
    this.us.updateuser(id, newprofile).subscribe(
      data => {
        this.entity = data;
        Swal.fire({
          icon: 'success',
          title: 'User updated successfully!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User update failed!',
          footer: error.message
        });
      }

    );
  }

  onSubmit2() {
    this.us.uploadImage(this.id, this.selectedFile).subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: 'File uploaded successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        const imageUrl = URL.createObjectURL(this.selectedFile);
        Swal.fire({
          imageUrl: imageUrl,
          imageAlt: 'Uploaded Image'
        });
      },
      err => {
        Swal.fire({
          title: 'Error',
          text: 'File upload failed',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  wallet : Wallet;
// wallet aziz
 AddWallet()
 {
  let id = sessionStorage.getItem('id')
    const url = `${environment.urlBackend}` +'wallet/addWallet/'+id;
    const wallet = {}; // Empty object since the body is okay to be empty

    this.http.post(url , wallet).subscribe(
      () => {
        console.log('Wallet Created for current User!');
        alert("Wallet Created. Add a Payment Method to make Purchases");
        // Add any additional logic or notifications here
      },
      (error) => {
        console.error('Error creating wallet:', error);
        // Handle the error as needed
      }
    );
 }

// end wallet
}
