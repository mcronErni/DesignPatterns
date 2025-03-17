public class Main {
    public static void main(String[] args) {
        Thermostat ac1 = Thermostat.getInstance();
        Thermostat ac2 = Thermostat.getInstance();

        System.out.println("Set AC-1 temp to 25");
        ac1.setTemp(25);

        System.out.println("AC-1 Temperature: "+ ac1.getTemp());
        System.out.println("AC-2 Temperature: "+ ac2.getTemp());
    }
}
