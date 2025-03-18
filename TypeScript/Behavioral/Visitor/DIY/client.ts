interface Car {
    apply(service: CarService): void;
}

interface CarService {
    apply(car: ElectricCar): void;
    apply(car: GasCar): void;
}

export class ElectricCar implements Car {
    apply(service: CarService): void {
        service.apply(this);
    }
}

export class GasCar implements Car {
    apply(service: CarService): void {
        service.apply(this);
    }
}

export class InspectionService implements CarService {
    apply(car: ElectricCar | GasCar): void {
        if (car instanceof ElectricCar) {
            console.log("Checking Electric Car's Battery Health");
        } else if (car instanceof GasCar) {
            console.log("Inspecting Engine, Fuel Injectors, and Oil");
        }
    }
}

class UpgradeService implements CarService {
    apply(car: ElectricCar | GasCar): void {
        if (car instanceof ElectricCar) {
            console.log("Remapping Electric Car's Software");
        } else if (car instanceof GasCar) {
            console.log("Upgrading Air Intake, Tuning the Engine.");
        }
    }
}

class AutoShop {
    private cars: Car[] = [];

    addCar(car: Car): void {
        this.cars.push(car);
    }

    applyService(service: CarService): void {
        for (const car of this.cars) {
            car.apply(service);
        }
    }
}

// Main Execution
const autoShop = new AutoShop();
const gasCar = new GasCar();
const electricCar = new ElectricCar();

autoShop.addCar(gasCar);
autoShop.addCar(electricCar);

autoShop.applyService(new InspectionService());
autoShop.applyService(new UpgradeService());
