import java.util.ArrayList;
import java.util.List;

public class Table {
    private String tableName;
    private List<String> columns = new ArrayList<>();

    public Table(String tableName) {
        this.tableName = tableName;
    }

    public String getTableName(){
        return tableName;
    }

    public void addColumn(String col){
        columns.add(col);
    }
    
}
