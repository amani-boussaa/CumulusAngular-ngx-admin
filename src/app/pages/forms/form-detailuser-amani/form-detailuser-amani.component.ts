import { Component, OnInit } from '@angular/core';
import { UseramaniService } from '../../../services/amani/useramani.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../services/login/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-form-detailuser-amani',
  templateUrl: './form-detailuser-amani.component.html',
  styleUrls: ['./form-detailuser-amani.component.scss']
})
export class FormDetailuserAmaniComponent implements OnInit {

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

  constructor(private route: ActivatedRoute, private us: UseramaniService,private http: HttpClient,private authservice : AuthService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id)

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

}
