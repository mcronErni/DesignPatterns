/**
 * Phone Command Pattern Implementation
 * Converted from Java to TypeScript
 */

// Command interface
interface Command {
    execute(): void;
  }
  
  // Receiver class
  class Phone {
    private isScreenOn: boolean = false;
  
    public toggleScreen(): void {
      this.isScreenOn = !this.isScreenOn;
      console.log(this.isScreenOn ? "Screen Turned On" : "Screen Turned Off");
    }
  
    public openAIAssistant(): void {
      console.log("Opening AI Assistant");
    }
  
    public openPowerMenu(): void {
      console.log("Opening Power Menu");
    }
  }
  
  // Concrete command implementations
  class ToggleScreenCommand implements Command {
    private phone: Phone;
  
    constructor(phone: Phone) {
      this.phone = phone;
    }
  
    public execute(): void {
      this.phone.toggleScreen();
    }
  }
  
  class OpenAIAssistantCommand implements Command {
    private phone: Phone;
  
    constructor(phone: Phone) {
      this.phone = phone;
    }
  
    public execute(): void {
      this.phone.openAIAssistant();
    }
  }
  
  class PowerOffMenuCommand implements Command {
    private phone: Phone;
  
    constructor(phone: Phone) {
      this.phone = phone;
    }
  
    public execute(): void {
      this.phone.openPowerMenu();
    }
  }
  
  // Invoker class
  class PowerButton {
    private shortPressCommand: Command | null = null;
    private longPressCommand: Command | null = null;
  
    public setShortPressCommand(shortPressCommand: Command): void {
      this.shortPressCommand = shortPressCommand;
    }
  
    public setLongPressCommand(longPressCommand: Command): void {
      this.longPressCommand = longPressCommand;
    }
  
    public longPress(): void {
      if (this.longPressCommand != null) {
        this.longPressCommand.execute();
      }
    }
  
    public shortPress(): void {
      if (this.shortPressCommand != null) {
        this.shortPressCommand.execute();
      }
    }
  }
  
  // Main function
  function main(): void {
    const phone = new Phone();
    const powerButton = new PowerButton();
  
    powerButton.setShortPressCommand(new ToggleScreenCommand(phone));
    powerButton.shortPress();
    powerButton.shortPress();
    powerButton.shortPress();
  
    powerButton.setLongPressCommand(new OpenAIAssistantCommand(phone));
    powerButton.longPress();
  
    console.log("Changing Power Button setting to Power Menu...");
    powerButton.setLongPressCommand(new PowerOffMenuCommand(phone));
    powerButton.longPress();
  }
  
  // Run the main function
  main();