export interface XInputController {
    control(game: VideoGame, input: string): void;
}

export class VideoGame {
    // VideoGame class implementation
}

export class Vulkan {
    private game: VideoGame;

    constructor(game: VideoGame) {
        this.game = game;
    }

    control(controller: XInputController, input: string): void {
        controller.control(this.game, input);
    }
}

export class XboxController implements XInputController {
    control(game: VideoGame, input: string): void {
        switch (input) {
            case "A":
                console.log("Character Jumped");
                break;
            case "B":
                console.log("Character Rolled");
                break;
            case "X":
                console.log("Character Used an Item");
                break;
            case "Y":
                console.log("Character Changed Weapon");
                break;
            default:
                console.log("no action");
        }
    }
}

export class DS4Controller {
    init(): void {
        console.log("DS4 initialized.");
    }

    dControl(game: VideoGame, input: string): void {
        switch (input) {
            case "X":
                console.log("Character Jumped");
                break;
            case "O":
                console.log("Character Rolled");
                break;
            case "🔺":
                console.log("Character Used an Item");
                break;
            case "⏹️":
                console.log("Character Changed Weapon");
                break;
            default:
                console.log("no action");
        }
    }
}

export class DS4WindowsAdapter implements XInputController {
    private ds4Controller: DS4Controller;

    constructor(ds4Controller: DS4Controller) {
        this.ds4Controller = ds4Controller;
    }

    control(game: VideoGame, input: string): void {
        this.ds4Controller.init();
        const mappedInput = this.mapDInputToXInput(input);
        if (mappedInput !== null) {
            this.ds4Controller.dControl(game, mappedInput);
        }
    }

    private mapDInputToXInput(input: string): string | null {
        switch (input) {
            case "A":
                return "X";
            case "B":
                return "O";
            case "X":
                return "🔺";
            case "Y":
                return "⏹️";
            default:
                return null;
        }
    }
}

// Main function to demonstrate the usage
function main() {
    const gameWindow = new Vulkan(new VideoGame());
    const xboxController = new XboxController();

    gameWindow.control(xboxController, "A");
    gameWindow.control(xboxController, "B");
    gameWindow.control(xboxController, "B");
    gameWindow.control(xboxController, "X");

    console.log("Player Plugged in DualShock4");
    console.log("DS4Windows Detected DS4 controller");

    const ds4WindowsAdapter = new DS4WindowsAdapter(new DS4Controller());
    gameWindow.control(ds4WindowsAdapter, "Y");
}

main();
