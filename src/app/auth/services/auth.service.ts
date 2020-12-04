import { GarageOwner, User} from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    isLoggedIn = false;
    token: any;
    baseUrl = '';
    //user = new GarageOwner('123456', 'kareem khalid', 'kkk', 'kkk123@gmail.com', 'abcd123', 1, 'karStore', 'bruh');
    users: Array<User> = [];
    tempUser: User;

    constructor(){
    }

    login(username: any, password: any) {
        //console.log(this.users[].userName + ' , ' + this.users[0].password);
        console.log(this.users[0].userName + ' , ' + this.users[0].password)
        if (this.users[0].userName === username && this.users[0].password === password){

            return true;

        }

        return false;
    }

    register(username: any, fullname: any, email: any, password: any) {
        this.tempUser = new User('123456', fullname, username, email, password);
        console.log(this.tempUser.userName + ' , ' + this.tempUser.password + ' , ' + this.tempUser.email + ' , ' + this.tempUser.fullName);
        return true;
    }

    createGarageOwner(numberOfStores: any, storeName: any, description: any) {
        this.users.push( new GarageOwner(this.tempUser.id, this.tempUser.fullName, this.tempUser.userName, this.tempUser.email, this.tempUser.password, numberOfStores, storeName, description));
        return true;
    }

    createCarOwner(numOfCars: any, lcarInfo: any) {

        return true;
    }

    reset(code: any) {
        return true;
    }

    /* private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    } */
}
