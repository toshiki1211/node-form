export default interface ISessionRequest {
    secret             : string;
    store              : string;
    expires            : number | Date;
    resave             : boolean;
    saveUninitialized  : boolean;
}
