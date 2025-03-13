public class UpgradeService implements CarService{

    @Override
    public void apply(ElectricCar car) {
        System.out.println("Remapping Electric Car's Software");
    }

    @Override
    public void apply(GasCar car) {
        System.out.println("Upgrading Air Intake, Tuning the Engine.");
    }

}
