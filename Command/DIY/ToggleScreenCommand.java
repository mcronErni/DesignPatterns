public class ToggleScreenCommand implements Command {

    private Phone phone;

    public ToggleScreenCommand(Phone phone) {
        this.phone = phone;
    }

    @Override
    public void execute() {
        phone.toggleScreen();
    }

}
