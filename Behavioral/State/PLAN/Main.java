public class Main {
    public static void main(String[] args) {
        drawUIControl(new TextBox());
        drawUIControl(new CheckBox());
    }

    private static void drawUIControl(UIControl control){
        control.draw();
    }
}
