public class Main {
    public static void main(String[] args) {
        var task = new TransferMoneyTask();
        task.execute();

        var task2 = new GenerateReportTask();
        task2.execute();
    }
}
