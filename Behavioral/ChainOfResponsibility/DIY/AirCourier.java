public class AirCourier extends CourierHandler {

    @Override
    public boolean doHandle(Package pkg) {
        if(pkg.getRegion().equals("Other Region") && pkg.getMaxDeliveryDuration() < 7){
            System.out.println("Package Delivered By Air Courier");
            return true;
        }
        System.out.println("Can't Deliver the Package");
        return false;
    }

}
