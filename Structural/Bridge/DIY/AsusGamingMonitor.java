public class AsusGamingMonitor implements Monitor{

    @Override
    public void enable60Hz() {
        System.out.println("Asus: Set Refresh Rate to 60hz");
    }

    @Override
    public void enableVSync() {
        System.out.println("Asus: Enabled VSync");
    }

    @Override
    public void enable144Hz() {
        System.out.println("Asus: Set Refresh Rate to 144hz");
    }

    @Override
    public void enableGSync() {
        System.out.println("Asus: Enabled GSync");
    }

}
