(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    } //: PersonProps

    class Person {

        public name      : string;
        public gender    : Gender;
        public birthdate : Date;

        constructor({name, gender, birthdate} : PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email     : string;
        role      : string;
    }

    class User {
        
        public email : string;
        public lastAccess: Date;
        public role : string;

        constructor({
            email,
            role} : UserProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
            workingDirectory       : string,
            lastOpenFolder         : string,
    } //: SettingsProps

    class Settings {

        public lastOpenFolder  : string;
        public workingDirectory : string;

        constructor({
            workingDirectory,
            lastOpenFolder} : SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory       : string,
        lastOpenFolder         : string,
        email                  : string,
        role                   : string,
        name                   : string,
        gender                 : Gender,
        birthdate              : Date
    }

    class UserSettings {

        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({
                name, gender, birthdate, 
                email, role,
                lastOpenFolder, workingDirectory,
            } : UserSettingsProps ){
                
            this.person = new Person({name, gender, birthdate,});
            this.user = new User({email, role});
            this.settings = new Settings( {lastOpenFolder, workingDirectory} );
        }

    }


    const userSettings = new UserSettings(
        {workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'fernando@google.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1985-10-21')}
    );

    console.log({ userSettings });


})();