
//MARK: Interfaces

interface Bird {

    eat() : void;

}

interface FlyingBird {
    fly() : void;
}

interface RunningBird {
    run() : void;
}

interface SwimmingBird {
    swim() : void;
}



//MARK: Classes

class Tucan implements Bird, FlyingBird {

    public fly() {}
    public eat() {}

}

class Humminbird implements Bird, FlyingBird {

    public fly() {}
    public eat() {}

}

class Ostrich implements Bird, RunningBird {

    public eat(): void {}

    public run(): void {}

}


class Penguin implements Bird, SwimmingBird {

    public eat(): void {}

    public swim() : void {}

}