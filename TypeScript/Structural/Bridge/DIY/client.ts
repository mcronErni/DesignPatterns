export interface Monitor {
    enable60Hz(): void;
    enableVSync(): void;
    enable144Hz(): void;
    enableGSync(): void;
}

export class HPOfficeMonitor implements Monitor {
    enable60Hz(): void {
        console.log("HP: Set Refresh Rate to 60hz");
    }

    enableVSync(): void {
        console.log("HP: Enabled VSync");
    }

    enable144Hz(): void {
        console.log("HP: Set Refresh Rate to 144hz");
    }

    enableGSync(): void {
        console.log("HP: Enabled GSync");
    }
}

export class AsusGamingMonitor implements Monitor {
    enable60Hz(): void {
        console.log("Asus: Set Refresh Rate to 60hz");
    }

    enableVSync(): void {
        console.log("Asus: Enabled VSync");
    }

    enable144Hz(): void {
        console.log("Asus: Set Refresh Rate to 144hz");
    }

    enableGSync(): void {
        console.log("Asus: Enabled GSync");
    }
}

export class BasicSettings {
    protected monitor: Monitor;

    constructor(monitor: Monitor) {
        this.monitor = monitor;
    }

    enable60Hz(): void {
        this.monitor.enable60Hz();
    }

    enableVSync(): void {
        this.monitor.enableVSync();
    }
}

export class AdvancedSettings extends BasicSettings {
    constructor(monitor: Monitor) {
        super(monitor);
    }

    enable144Hz(): void {
        this.monitor.enable144Hz();
    }

    enableGSync(): void {
        this.monitor.enableGSync();
    }
}

// Main function to demonstrate the usage
function main() {
    const monitor1 = new BasicSettings(new HPOfficeMonitor());
    const monitor2 = new AdvancedSettings(new AsusGamingMonitor());

    console.log("Using Asus Gaming Monitor");
    monitor2.enable144Hz();
    monitor2.enableGSync();

    console.log("Using HP Office Monitor");
    monitor1.enable60Hz();
    monitor1.enableVSync();
}

main();
