public class GameModeFacade {
    private BackgroundProcessManager bgProcessManager = new BackgroundProcessManager();
    private PerformanceBooster performanceBooster = new PerformanceBooster();
    private NotificationManager notificationManager = new NotificationManager();

    private boolean isEnabled;

    public void toggleGameMode(){

        isEnabled = !isEnabled;

        if(isEnabled){
            bgProcessManager.setOn();
            performanceBooster.setOn();
            notificationManager.disableNotifications();
        }else{
            bgProcessManager.setOff();
            performanceBooster.setOff();
            notificationManager.enableNotifications();
        }

    }

}
