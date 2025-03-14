public class BasicSettings {
    protected Monitor monitor;

    public BasicSettings(Monitor monitor) {
        this.monitor = monitor;
    }

    public void enable60Hz(){
        monitor.enable60Hz();
    }

    public void enableVSync(){
        monitor.enableVSync();
    }
}
