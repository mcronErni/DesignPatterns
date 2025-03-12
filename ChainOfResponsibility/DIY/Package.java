public class Package {
    private String region;
    private int maxDeliveryDuration;
    

    public Package(String region, int maxDeliveryDuration) {
        this.region = region;
        this.maxDeliveryDuration= maxDeliveryDuration;
    }

    public String getRegion() {
        return region;
    }

    public int getMaxDeliveryDuration() {
        return maxDeliveryDuration;
    }



}
