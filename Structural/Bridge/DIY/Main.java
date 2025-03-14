public class Main {
    public static void main(String[] args) {
        
        var monitor1 = new BasicSettings(new HPOfficeMonitor());
        var monitor2 = new AdvancedSettings(new AsusGamingMonitor());


        System.out.println("Using Asus Gaming Monitor");
        monitor2.enable144Hz();
        monitor2.enableGSync();

        System.out.println("Using HP Office Monitor");
        monitor1.enable60Hz();
        monitor1.enableVSync();
    }
}
