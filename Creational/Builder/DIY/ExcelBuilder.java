public class ExcelBuilder implements ReportBuilder {

    private ExcelDocument document = new ExcelDocument();

    @Override
    public void addTable(String tableName, Table table) {
        document.addData(tableName, table);
    }

    public ExcelDocument getExcelDocument(){
        return document;
    }

}
