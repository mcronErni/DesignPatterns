public class TermsCheckBox extends UIControl {

    private boolean isEnabled;

    public TermsCheckBox(FormMediator owner) {
        super(owner);
    }

    public boolean IsEnabled() {
        return isEnabled;
    }

    public void setIsEnabled(boolean isEnabled) {
        this.isEnabled = isEnabled;
        owner.changed(this);
    }

}
