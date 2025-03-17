public class CarController {
    private Car car;
    public CarController(Car car){
        this.car = (car != null) ? car : CarFactory.getDefaultTrim();
    }

    public void showCarDetails(){
        System.out.println("Car Details:");
        car.engine();
        car.checkDetails();
    }

}
