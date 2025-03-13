public class Phone {
    private boolean isScreenOn = false;

    void toggleScreen(){
        isScreenOn = !isScreenOn;
        System.out.println(isScreenOn ? "Screen Turned On" : "Screen Turned Off");
    }

    void openAIAssistant(){
        System.out.println("Opening AI Assistant");
    }

    void openPowerMenu(){
        System.out.println("Opening Power Menu");
    }

}
