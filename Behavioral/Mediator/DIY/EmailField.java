public class EmailField extends UIControl {

    private String email;

    public EmailField(FormMediator owner) {
        super(owner);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
        owner.changed(this);
    }

    public boolean isEmailValid(){
        return ( (email != null || ! email.isEmpty()) && email.contains("@") );
    }
    

}
