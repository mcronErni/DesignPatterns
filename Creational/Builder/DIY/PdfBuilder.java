public class PdfBuilder implements ReportBuilder {

    private PdfDocument document = new PdfDocument();

    @Override
    public void addTable(String tableName, Table table) {
        document.addPage(tableName, table);
    }

    public PdfDocument getPdfDocument(){
        return document;
    }

}
