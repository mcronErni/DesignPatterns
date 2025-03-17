public class Main {
    public static void main(String[] args) {
        System.out.println("New car without Customizations:");
        var car1 = new CarController(null);
        car1.showCarDetails();

        System.out.println("New Higher Trim Car");
        var car2 = new CarController(new HighTrimModel());
        car2.showCarDetails();

        System.out.println("User Defined Car Class");
        var car3 = new CarController(new CarUserRequestedFeatures());
        car3.showCarDetails();
    }
}
