public abstract class ComponentAbstract {
    
    protected String name;
    protected String type;
    protected DirectoryAbstract parent;

    public ComponentAbstract(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public ComponentAbstract(String name, String type, DirectoryAbstract parent) {
        this.name = name;
        this.type = type;
        this.parent = parent;
    }

    public void checkDetails() {
        System.out.println("Details:\n"+"Name: "+name+"\nType: "+type);
    }
    
    void setName(String name){
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public String getType() {
        return type;
    }

    public void list() {
        list("");
    }

    public abstract void list(String indent);

    abstract void delete();
    

}
