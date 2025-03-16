public class TreeType implements TreeFlyweight {
    private final String type;
    private final String color;
    private final String texture;

    public TreeType(String type, String color, String texture) {
        this.type = type;
        this.color = color;
        this.texture = texture;
    }

    @Override
    public void display(int x, int y) {
        System.out.println("Displaying " + type + " tree at (" + x + ", " + y + ") with color " + color);
    }
}
