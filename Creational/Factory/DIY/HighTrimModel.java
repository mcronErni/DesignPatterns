public class HighTrimModel implements Car {

    @Override
    public void engine() {
        System.out.println("Base Trim Engine: 2.5L - w/Turbo");
    }

    @Override
    public void checkDetails() {
        System.out.println("Heated Seats, Leather Upholstery, Infotainment System, Advanced Safety Equipment");
    }

}
