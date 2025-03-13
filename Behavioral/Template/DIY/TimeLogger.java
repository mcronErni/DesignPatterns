
import java.sql.Time;
import java.time.LocalTime;

public class TimeLogger {
    public void startLogging(){
        System.out.println("Model Creation Started: "+ Time.valueOf(LocalTime.now()));
    }

    public void stopLogging(){
        System.out.println("Model Creation Stopped: "+ Time.valueOf(LocalTime.now()));
    }
}
