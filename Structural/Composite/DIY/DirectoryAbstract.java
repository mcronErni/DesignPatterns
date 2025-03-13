import java.util.ArrayList;
import java.util.List;

public abstract class DirectoryAbstract extends ComponentAbstract{

    protected List<ComponentAbstract> components = new ArrayList<>();

    public DirectoryAbstract(String name, String type) {
        super(name, type);
    }

    public DirectoryAbstract(String name, String type, DirectoryAbstract parent) {
        super(name, type, parent);
    }

    public void add(ComponentAbstract component) {
        components.add(component);
        System.out.println(component.getName()+":"+component.getType() + " was added to "+name);
    }

    public void removeComponent(ComponentAbstract component) {
        components.remove(component);
        System.out.println(component.getName() + " was removed from " + name);
    }

    @Override
    public void delete() {
        for(var component : components){
            System.out.println(component.getName() + ":" + component.getType() + " deleted");
            component.delete();
        }
        components.clear();

        if (parent != null) {
            parent.removeComponent(this);
            System.out.println(name + " was deleted.");
        }

    }
    
    @Override
    public void list(String indent) {
        System.out.println(indent + name);
        String newIndent = indent + "    ";
        for(var component : components) {
            component.list(newIndent);
        }
    }

    @Override
    public void list() {
        list("");  // Start with no indentation
    }

}
