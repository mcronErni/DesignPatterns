public class Main {
    public static void main(String[] args) {
        
        var gameWindow = new Vulkan(new VideoGame());
        var xboxController = new XboxController();
        gameWindow.control(xboxController, "A");
        gameWindow.control(xboxController, "B");
        gameWindow.control(xboxController, "B");
        gameWindow.control(xboxController, "X");


        System.out.println("Player Plugged in DualShock4");
        System.out.println("DS4Windows Detected DS4 controller");

        var ds4WindowsAdapter = new DS4WindowsAdapter(new DS4Controller());
        gameWindow.control(ds4WindowsAdapter, "Y");

    }
}
