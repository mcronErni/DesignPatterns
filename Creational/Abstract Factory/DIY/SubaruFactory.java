public class SubaruFactory implements CarFactory {

    @Override
    public Car createCar() {
        return new SubaruCar();
    }

    @Override
    public Engine createEngine() {
        return new SubaruEngine();
    }

    @Override
    public Transmission createTransmission() {
        return new SubaruTransmission();
    }

}
