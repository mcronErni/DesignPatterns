public class ContactForm {
    public void render(WidgetFactory factory){
        factory.createTextBox().render();
        factory.createButton().render();
    }
}
