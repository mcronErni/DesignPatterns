public class BackgroundProcessManager {
    
    private boolean status;

    public void toggle(){
        
        status = !status;
        
        if(status){
            setOn();
        }else{
            setOff();
        }
        status = !status;
    }

    public void setOn(){
        System.out.println("Limiting Background Process");
    }

    public void setOff(){
        System.out.println("Turning of Background Process Limiter");
    }

}
