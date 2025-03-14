public class PerformanceBooster {
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
        System.out.println("Overclocking CPU/GPU");
    }

    public void setOff(){
        System.out.println("CPU/GPU returned to normal clock speed");
    }
}
