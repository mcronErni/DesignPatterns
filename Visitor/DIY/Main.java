public class Main {
    public static void main(String[] args) {
        var autoShop = new AutoShop();
        var gasCar = new GasCar();
        var electricCar = new ElectricCar();

        autoShop.addCar(gasCar);
        autoShop.addCar(electricCar);

        autoShop.applyService(new InspectionService());
        autoShop.applyService(new UpgradeService());
    }    
}
