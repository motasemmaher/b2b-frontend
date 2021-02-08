export class SharedRoutingConstants {
    static CAR = 'car';
    static GARAGE = 'garage';
}
export class AppRoutingConstants {
    static AUTH = 'auth';
    static BUSINESS = 'business';
    static EXPORT = 'export';
}

export class BusinessRoutingConstants {
    static HOME = 'home';
    static ORDERS = 'orders';
    static MY_STORES = 'my-stores';
    static SOS = 'sos';
    static ADD_STORE = 'add-store';
    static ADMIN = 'admin';
    static BUSINESS = 'business';
    static EXPORT = 'export';
    static COMPLAINTS = 'complaints';
    static SEARCH = 'search';
    static STORE = 'store';
}

export class BasedUrlsConstants {
    static BASED_URL_LOCALHOST_CHAT = 'http://localhost:3001';
    static BASED_URL_LOCALHOST = 'http://localhost:3000';
    // static BASED_URL_LOCALHOST = 'https://b2b-api-server.herokuapp.com';
    static BASED_URL_SEARCH_BY_IMAGE = 'http://localhost:8000';
}


export class AuthRoutingConstants {
    static LOGIN = 'login';
    static SIGN_UP = 'sign-up';
    static USER_INFO = 'user-info';
    static CREATE = 'create';
    static CAR_INFO = 'car-owner';
    static RESET_PASSWORD = 'reset-password';
    static TYPE = 'type';
    static GARAGE_INFO = 'garage-owner';
    static REFRESH_AUTHENTICATION = 'refresh-authentication';
}

export class SettingsRoutingConstants {
    static MANAGE_ACCOUNTS = 'manage-accounts';
    static USER_INFO = 'user-info';
    static CAR_INFO = 'car-owner';
    static GARAGE_INFO = 'garage-owner';
    static TYPE = 'type';
    static GENERAL = 'general';
}