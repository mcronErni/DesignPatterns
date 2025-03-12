public class LogisticsHub {
    private CourierHandler handler;

    public LogisticsHub(CourierHandler handler) {
        this.handler = handler;
    }

    public void handle(Package pkg){
        System.out.println("Package with Destination: "+pkg.getRegion()+ " was handed to "+handler.getClass().getSimpleName());
        handler.handle(pkg);
    }

}
