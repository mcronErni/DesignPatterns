
import java.util.ArrayList;
import java.util.List;

public class Report {
    private List<Table> tables = new ArrayList<>();

    public void addTable(Table table){
        tables.add(table);
    }

    public void export(ReportBuilder builder){
        for(Table table : tables){
            builder.addTable(table.getTableName(), table);
        }
    }

    
}
