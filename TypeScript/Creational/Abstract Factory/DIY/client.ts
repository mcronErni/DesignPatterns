// Interfaces
interface Transmission {
    setup(): void;
}

interface Car {
    assemble(): void;
}

interface CarFactory {
    createCar(): Car;
    createEngine(): Engine;
    createTransmission(): Transmission;
}

interface Engine {
    create(): void;
}

// Implementations
class SubaruCar implements Car {
    assemble(): void {
        console.log("Assembling Subaru Impreza WRX STi");
    }
}

class SubaruEngine implements Engine {
    create(): void {
        console.log("Creating EJ22G Engine");
    }
}

class SubaruTransmission implements Transmission {
    setup(): void {
        console.log("Setting up Subaru Transmission Gear Ratio");
    }
}

class SubaruFactory implements CarFactory {
    createCar(): Car {
        return new SubaruCar();
    }

    createEngine(): Engine {
        return new SubaruEngine();
    }

    createTransmission(): Transmission {
        return new SubaruTransmission();
    }
}

// Main function (equivalent to Java's main method)
function main(): void {
    const subaruFactory: CarFactory = new SubaruFactory();
    const subaru: Car = subaruFactory.createCar();
    const subaruEngine: Engine = subaruFactory.createEngine();
    const subaruTransmission: Transmission = subaruFactory.createTransmission();

    subaru.assemble();
    subaruEngine.create();
    subaruTransmission.setup();
}

// Execute the main function
main();