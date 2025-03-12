public class Main {
    public static void main(String[] args) {
        var registrationForm = new RegistrationForm();


        System.out.println("--------Input an INVALID Email--------");
        registrationForm.getEmailField().setEmail("sampleEmail.Invalid");

        System.out.println("\n");

        System.out.println("--------ACCEPT the Terms and Conditions--------");
        registrationForm.getTermsCheckBox().setIsEnabled(true);
        
        System.out.println("\n");

        System.out.println("--------Input a VALID Email--------");
        registrationForm.getEmailField().setEmail("sampleEmail@gmail.com");
    }
}
