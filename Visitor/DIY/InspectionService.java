public class InspectionService implements CarService{

    @Override
    public void apply(ElectricCar car) {
       System.out.println("Checking Electric Car's Battery Health"); 
    }

    @Override
    public void apply(GasCar car) {
       System.out.println("Inspecting Engine, Fuel Injectors, and Oil"); 
    }

}
