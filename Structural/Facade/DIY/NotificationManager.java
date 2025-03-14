public class NotificationManager {
    private boolean status = true;

    public void toggle(){
        
        status = !status;
        
        if(status){
            enableNotifications();
        }else{
            disableNotifications();
        }
        status = !status;
    }

    public void disableNotifications(){
        System.out.println("Disabling Notifications");
    }

    public void enableNotifications(){
        System.out.println("Enabling Notifications");
    }
}
