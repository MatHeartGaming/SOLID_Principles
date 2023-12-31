
type Gender = 'M' | 'F';

(() => {

    class Person {

        constructor(
            public name      : string, 
            public gender    : Gender, 
            public birthdate : Date
        ){}
    
    } //: Person

    class User extends Person {

        public lastAccess : Date;
        
        constructor(
            public email : string,
            public role  : string,
            name         : string,
            gender       : Gender,
            birthdate    : Date,
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }


        checkCredentials() : boolean {
            return true;
        }
    } //: User


    class UserSettings extends User {

        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : Gender,
            birthdate               : Date,
        ){
            super(email, role, name, gender, birthdate);
        }
    } //: UserSettings


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'mat@gmail.com',
        'Admin',
        'Matteo',
        'M',
        new Date('1990-03-20'),
    );

    console.log(userSettings);

})();