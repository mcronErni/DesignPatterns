public abstract class CourierHandler {

    private CourierHandler next;

    public void setNextHandler(CourierHandler next){
        this.next = next;
    }

    public void handle(Package pkg){
        if(doHandle(pkg)){
            // System.out.println("Package Delivered by ");
            return;
        }if(next != null){
            next.handle(pkg);
        }
    }

    public abstract boolean doHandle(Package pkg);

}
