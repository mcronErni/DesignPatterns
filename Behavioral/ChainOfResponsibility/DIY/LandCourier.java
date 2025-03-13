public class LandCourier extends CourierHandler {

    @Override
    public boolean doHandle(Package pkg) {
        if(pkg.getRegion().equals("Same Region")){
            System.out.println("Package Delivered By Land Courier");
            return true;
        }
        System.out.println("Can't Deliver the Package by Land");
        return false;
    }

}
