public class Main {

    public static void main(String[] args) {

        var airCourier = new AirCourier();
        var seaCourier = new SeaCourier();
        var landCourier = new LandCourier();

        landCourier.setNextHandler(seaCourier); 
        seaCourier.setNextHandler(airCourier);
        airCourier.setNextHandler(null);

        var logisticsHub = new LogisticsHub(landCourier);

        System.out.println("Package 1: Same Region, Duration: <6 Days");        
        logisticsHub.handle(new Package("Same Region", 6));
        // landCourier.handle(new Package("Same Region", 6));
        
        System.out.println("\n");
        System.out.println("Package 2: Other Region, Duration: >6 Days");
        logisticsHub.handle(new Package("Other Region", 15));
        // landCourier.handle(new Package("Other Region", 15));
        
        System.out.println("\n");
        System.out.println("Package 3: Other Region, Duration: <6 Days");
        logisticsHub.handle(new Package("Other Region", 6));
        // landCourier.handle(new Package("Other Region", 6));

    }

}
