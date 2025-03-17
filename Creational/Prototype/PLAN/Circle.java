public class Circle implements Component{

    private int radius;
    

    @Override
    public void render() {
        System.out.println("Rendering a Circle");
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    @Override
    public Component clone() {
        Circle newCircle = new Circle();
        newCircle.setRadius(radius);
        return newCircle;
    }

}
