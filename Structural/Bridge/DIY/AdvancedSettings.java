public class AdvancedSettings extends BasicSettings {

    public AdvancedSettings(Monitor monitor) {
        super(monitor);
    }

    public void enable144Hz(){
        monitor.enable144Hz();
    }

    public void enableGSync(){
        monitor.enableGSync();
    }
}
