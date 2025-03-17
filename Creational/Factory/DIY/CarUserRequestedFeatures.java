public class CarUserRequestedFeatures implements Car{

    @Override
    public void engine() {
        System.out.println("Base Trim Engine: DOHC-4V 1.6L");
    }

    @Override
    public void checkDetails() {
        System.out.println("Upgraded infotainment system, Custom Paint.");
    }

}
