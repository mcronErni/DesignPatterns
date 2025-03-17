public class Thermostat {
    private static Thermostat instance = new Thermostat();
    private int temp = 23;

    private Thermostat(){
        System.out.println("Thermostat Initialized. Temp: "+ temp);
    }

    public static Thermostat getInstance(){
        return instance;
    }

    public void setTemp(int temp){
        this.temp = temp;
    }

    public int getTemp(){
        return temp;
    }
}
