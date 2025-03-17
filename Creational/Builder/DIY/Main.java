public class Main {
    public static void main(String[] args) {
        var report = new Report();

        var table1 = new Table("Country Population");
        table1.addColumn("Philippines");

        report.addTable(table1);

        var excelReportBuilder = new ExcelBuilder();
        report.export(excelReportBuilder);
        var excel = excelReportBuilder.getExcelDocument();
    }
}
