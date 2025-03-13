public class Main {
    
    public static void main(String[] args) {

        var backlogs = new Backlogs("Bootcamper Backlogs");

        var epic1 = new Epic("Advanced Backend Development", backlogs);
        var epic2 = new Epic("Code Quality", backlogs);
        var epic3 = new Epic("Cloud Development", backlogs);
        var epic4 = new Epic("Quality Testing", backlogs);

        backlogs.add(epic1);
        epic2.add(epic3);
        epic3.add(epic4);
        backlogs.add(epic2);
        backlogs.list();

        epic2.delete();
        backlogs.list();
        
    }

}
