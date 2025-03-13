import java.util.ArrayList;
import java.util.List;

public class AutoShop {
    private List<Car> cars = new ArrayList<>();

    public void addCar(Car car){
        cars.add(car);
    }

    public void applyService(CarService service){
        for(var car : cars){
            car.apply(service);
        }
    }

}
