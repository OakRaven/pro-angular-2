import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "./rest.datasource";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
    constructor(private datasource: RestDataSource) { }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.datasource.authenicate(username, password);
    }

    get authenticated(): boolean {
        return this.datasource.auth_token != null;
    }

    clear(): void {
        this.datasource.auth_token = null;
    }
}