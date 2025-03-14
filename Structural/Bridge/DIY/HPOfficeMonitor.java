public class HPOfficeMonitor implements Monitor {

    @Override
    public void enable60Hz() {
        System.out.println("HP: Set Refresh Rate to 60hz");
    }

    @Override
    public void enableVSync() {
        System.out.println("HP: Enabled VSync");
    }

    @Override
    public void enable144Hz() {
        System.out.println("HP: Set Refresh Rate to 144hz");
    }

    @Override
    public void enableGSync() {
        System.out.println("HP: Enabled GSync");
    }

}
