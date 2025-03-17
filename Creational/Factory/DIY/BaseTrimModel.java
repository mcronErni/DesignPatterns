public class BaseTrimModel implements Car {

    @Override
    public void engine() {
        System.out.println("Base Trim Engine: DOHC-4V 1.6L");
    }

    @Override
    public void checkDetails() {
        System.out.println("Base Model");
    }

}
