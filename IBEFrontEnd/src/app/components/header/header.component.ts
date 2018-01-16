import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../core/service/auth.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Travel Technology';

    isSignedIn: boolean;

    constructor(private router: Router,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.isSignedIn = this.authService.isSignedIn();
        this.authService.events.subscribe(() => {
            this.isSignedIn = this.authService.isSignedIn();
        });
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
