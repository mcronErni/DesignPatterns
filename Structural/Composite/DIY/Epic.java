public class Epic extends DirectoryAbstract{

    public Epic(String name) {
        super(name, "Epic");
    }

    public Epic(String name, DirectoryAbstract parent) {
        super(name, "Epic", parent);
        
    }

}
