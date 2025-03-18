export class Thermostat {
    private static instance: Thermostat = new Thermostat();
    private temp: number = 23;

    private constructor() {
        console.log("Thermostat Initialized. Temp: " + this.temp);
    }

    public static getInstance(): Thermostat {
        return Thermostat.instance;
    }

    public setTemp(temp: number): void {
        this.temp = temp;
    }

    public getTemp(): number {
        return this.temp;
    }
}

// Main function to demonstrate the usage
function main() {
    const ac1 = Thermostat.getInstance();
    const ac2 = Thermostat.getInstance();

    console.log("Set AC-1 temp to 25");
    ac1.setTemp(25);

    console.log("AC-1 Temperature: " + ac1.getTemp());
    console.log("AC-2 Temperature: " + ac2.getTemp());
}

main();
