public class RegisterButton extends UIControl {

    private boolean  isEnabled;

    public RegisterButton(FormMediator owner) {
        super(owner);
    }

    public boolean isIsEnabled() {
        return isEnabled;
    }

    public void setIsEnabled(boolean isEnabled) {
        this.isEnabled = isEnabled;
    }

}
