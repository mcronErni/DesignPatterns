public class GasCar implements Car{

    @Override
    public void apply(CarService service) {
        service.apply(this);
    }

}
