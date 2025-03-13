public class Main {
    public static void main(String[] args) {
        
        var phone = new Phone();
        var powerButton = new PowerButton();

        powerButton.setShortPressCommand(new ToggleScreenCommand(phone));
        powerButton.shortPress();
        powerButton.shortPress();
        powerButton.shortPress();

        powerButton.setLongPressCommand(new OpenAIAssistantCommand(phone));
        powerButton.longPress();

        System.out.println("Changing Power Button setting to Power Menu...");
        powerButton.setLongPressCommand(new PowerOffMenuCommand(phone));
        powerButton.longPress();

    }
}
