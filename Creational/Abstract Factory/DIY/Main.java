public class Main {
    public static void main(String[] args) {
        CarFactory subaruFactory = new SubaruFactory();
        Car subaru = subaruFactory.createCar();
        Engine subaruEngine = subaruFactory.createEngine();
        Transmission subaruTransmission = subaruFactory.createTransmission();

        subaru.assemble();
        subaruEngine.create();
        subaruTransmission.setup();
    }
}
