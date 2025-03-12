public class RegistrationForm extends FormMediator {

    private EmailField emailField = new EmailField(this);
    private TermsCheckBox termsCheckBox = new TermsCheckBox(this);
    private RegisterButton registerButton = new RegisterButton(this);


    @Override
    public void changed(UIControl control) {
        var isValid = emailField.isEmailValid();
        if(isValid && termsCheckBox.IsEnabled()){
            registerButton.setIsEnabled(true);
        }
        else{
            if(!isValid){
            System.out.println("Email is Not valid");
        }
            if(!termsCheckBox.IsEnabled()){
                System.out.println("Please Read the Terms and Conditions");
            }
        }

        System.out.println("Email: " + emailField.getEmail());
        System.out.println("Terms and Condition: " + termsCheckBox.IsEnabled());
        System.out.println("Register Button: " + registerButton.isIsEnabled());
    }

    public EmailField getEmailField() {
        return emailField;
    }

    public TermsCheckBox getTermsCheckBox() {
        return termsCheckBox;
    }


}
