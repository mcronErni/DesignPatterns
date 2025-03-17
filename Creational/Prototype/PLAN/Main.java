public class Main {
    public static void main(String[] args) {
        var circle1 = new Circle();
        circle1.setRadius(5);

        var comp = new ContextMenu();
        var circle2 = comp.duplicate(circle1);
        
        circle1.render();
        circle2.render();

    }
}
