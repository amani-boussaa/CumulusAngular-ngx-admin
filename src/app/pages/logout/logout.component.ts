import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/login/auth.service";

@Component({
  selector: "ngx-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent implements OnInit {
  constructor(private aus: AuthService) {}

  ngOnInit(): void {
    this.aus.logout();
  }
}
