/**
 * Registration Form with Mediator Pattern
 * Converted from Java to TypeScript
 */

// Abstract base class for UI controls
abstract class UIControl {
    protected owner: FormMediator;
  
    constructor(owner: FormMediator) {
      this.owner = owner;
    }
  }
  
  // Abstract Mediator class
  abstract class FormMediator {
    public abstract changed(control: UIControl): void;
  }
  
  // Email field control
  class EmailField extends UIControl {
    private email: string = '';
  
    constructor(owner: FormMediator) {
      super(owner);
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public setEmail(email: string): void {
      this.email = email;
      this.owner.changed(this);
    }
  
    public isEmailValid(): boolean {
      return ((this.email != null && this.email !== '') && this.email.includes('@'));
    }
  }
  
  // Terms checkbox control
  class TermsCheckBox extends UIControl {
    private isEnabled: boolean = false;
  
    constructor(owner: FormMediator) {
      super(owner);
    }
  
    public IsEnabled(): boolean {
      return this.isEnabled;
    }
  
    public setIsEnabled(isEnabled: boolean): void {
      this.isEnabled = isEnabled;
      this.owner.changed(this);
    }
  }
  
  // Register button control
  class RegisterButton extends UIControl {
    private isEnabled: boolean = false;
  
    constructor(owner: FormMediator) {
      super(owner);
    }
  
    public isIsEnabled(): boolean {
      return this.isEnabled;
    }
  
    public setIsEnabled(isEnabled: boolean): void {
      this.isEnabled = isEnabled;
    }
  }
  
  // Concrete Mediator implementation
  class RegistrationForm extends FormMediator {
    private emailField: EmailField = new EmailField(this);
    private termsCheckBox: TermsCheckBox = new TermsCheckBox(this);
    private registerButton: RegisterButton = new RegisterButton(this);
  
    public changed(control: UIControl): void {
      const isValid = this.emailField.isEmailValid();
      
      if (isValid && this.termsCheckBox.IsEnabled()) {
        this.registerButton.setIsEnabled(true);
      } else {
        if (!isValid) {
          console.log("Email is Not valid");
        }
        if (!this.termsCheckBox.IsEnabled()) {
          console.log("Please Read the Terms and Conditions");
        }
        this.registerButton.setIsEnabled(false);
      }
  
      console.log("Email: " + this.emailField.getEmail());
      console.log("Terms and Condition: " + this.termsCheckBox.IsEnabled());
      console.log("Register Button: " + this.registerButton.isIsEnabled());
    }
  
    public getEmailField(): EmailField {
      return this.emailField;
    }
  
    public getTermsCheckBox(): TermsCheckBox {
      return this.termsCheckBox;
    }
  }
  
  // Main function
  function main(): void {
    const registrationForm = new RegistrationForm();
  
    console.log("--------Input an INVALID Email--------");
    registrationForm.getEmailField().setEmail("sampleEmail.Invalid");
  
    console.log("\n");
  
    console.log("--------ACCEPT the Terms and Conditions--------");
    registrationForm.getTermsCheckBox().setIsEnabled(true);
    
    console.log("\n");
  
    console.log("--------Input a VALID Email--------");
    registrationForm.getEmailField().setEmail("sampleEmail@gmail.com");
  }
  
  // Run the main function
  main();