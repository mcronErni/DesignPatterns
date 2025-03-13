public class PowerOffMenuCommand implements Command {

    private Phone phone;

    public PowerOffMenuCommand(Phone phone) {
        this.phone = phone;
    }

    @Override
    public void execute() {
        phone.openPowerMenu();
    }

}
