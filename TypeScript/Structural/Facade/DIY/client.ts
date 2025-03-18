export class GameModeFacade {
    private bgProcessManager: BackgroundProcessManager = new BackgroundProcessManager();
    private performanceBooster: PerformanceBooster = new PerformanceBooster();
    private notificationManager: NotificationManager = new NotificationManager();
    private isEnabled: boolean = false;

    public toggleGameMode(): void {
        this.isEnabled = !this.isEnabled;

        if (this.isEnabled) {
            this.bgProcessManager.setOn();
            this.performanceBooster.setOn();
            this.notificationManager.disableNotifications();
        } else {
            this.bgProcessManager.setOff();
            this.performanceBooster.setOff();
            this.notificationManager.enableNotifications();
        }
    }
}

export class BackgroundProcessManager {
    private status: boolean = false;

    public toggle(): void {
        this.status = !this.status;

        if (this.status) {
            this.setOn();
        } else {
            this.setOff();
        }
        this.status = !this.status;
    }

    public setOn(): void {
        console.log("Limiting Background Process");
    }

    public setOff(): void {
        console.log("Turning off Background Process Limiter");
    }
}

export class NotificationManager {
    private status: boolean = true;

    public toggle(): void {
        this.status = !this.status;

        if (this.status) {
            this.enableNotifications();
        } else {
            this.disableNotifications();
        }
        this.status = !this.status;
    }

    public disableNotifications(): void {
        console.log("Disabling Notifications");
    }

    public enableNotifications(): void {
        console.log("Enabling Notifications");
    }
}

export class PerformanceBooster {
    private status: boolean = false;

    public toggle(): void {
        this.status = !this.status;

        if (this.status) {
            this.setOn();
        } else {
            this.setOff();
        }
        this.status = !this.status;
    }

    public setOn(): void {
        console.log("Overclocking CPU/GPU");
    }

    public setOff(): void {
        console.log("CPU/GPU returned to normal clock speed");
    }
}

// Main function to demonstrate the usage
function main() {
    const gameMode = new GameModeFacade();

    console.log("User Enables Game Mode");
    gameMode.toggleGameMode();

    console.log("User toggled the game mode");
    gameMode.toggleGameMode();
}

main();
