export class User {
    public id: string;
    public fullName: string;
    public userName: string;
    public email: string;
    public password: string;
    public token?: string;

    constructor(id: string,
                fullName: string,
                userName: string,
                email: string,
                password: string,
    ){
        this.id = id;
        this.fullName = fullName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.token = '';
    }
}
export class GarageOwner extends User{
    public numOfStores: number;
    public storeName: string;
    public description: string;

    constructor(id: string,
                fullName: string,
                userName: string,
                email: string,
                password: string,
                numOfStores: number,
                storeName: string,
                description: string
    ){
        super(id, fullName, userName, email, password);
        this.numOfStores = numOfStores;
        this.storeName = storeName;
        this.description = description;
    }
}
export class CarOwner extends User{
    public numOfCars: number;
    public lcarInfo: {
        carYear: string;
        carModel: string;
        carMake: string;
    }[];

    constructor(id: string,
                fullName: string,
                userName: string,
                email: string,
                password: string,
                numOfCars: number,
                lcarInfo: any,
){
    super(id, fullName, userName, email, password);
    this.numOfCars = numOfCars;
    this.lcarInfo = lcarInfo;
}
}
