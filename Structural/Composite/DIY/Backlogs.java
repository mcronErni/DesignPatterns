
public class Backlogs extends DirectoryAbstract{

    public Backlogs(String name) {
        super(name, "Backlog");
    }

    public Backlogs(String name, DirectoryAbstract parent) {
        super(name, "Backlog", parent);
        
    }

}
