interface Car {
    engine(): void;
    checkDetails(): void;
}

export class BaseTrimModel implements Car {
    engine(): void {
        console.log("Base Trim Engine: DOHC-4V 1.6L");
    }

    checkDetails(): void {
        console.log("Base Model");
    }
}

class HighTrimModel implements Car {
    engine(): void {
        console.log("Base Trim Engine: 2.5L - w/Turbo");
    }

    checkDetails(): void {
        console.log("Heated Seats, Leather Upholstery, Infotainment System, Advanced Safety Equipment");
    }
}

class CarUserRequestedFeatures implements Car {
    engine(): void {
        console.log("Base Trim Engine: DOHC-4V 1.6L");
    }

    checkDetails(): void {
        console.log("Upgraded infotainment system, Custom Paint.");
    }
}

class CarFactory {
    static getDefaultTrim(): Car {
        return new BaseTrimModel();
    }
}

class CarController {
    private car: Car;

    constructor(car?: Car) {
        this.car = car ? car : CarFactory.getDefaultTrim();
    }

    showCarDetails(): void {
        console.log("Car Details:");
        this.car.engine();
        this.car.checkDetails();
    }
}

// Main function to demonstrate the usage
function main() {
    console.log("New car without Customizations:");
    const car1 = new CarController();
    car1.showCarDetails();

    console.log("New Higher Trim Car");
    const car2 = new CarController(new HighTrimModel());
    car2.showCarDetails();

    console.log("User Defined Car Class");
    const car3 = new CarController(new CarUserRequestedFeatures());
    car3.showCarDetails();
}

main();
