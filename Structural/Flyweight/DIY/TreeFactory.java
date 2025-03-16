
import java.util.HashMap;
import java.util.Map;

public class TreeFactory {
    private static final Map<String, TreeFlyweight> treeMap = new HashMap<>();
    public static TreeFlyweight getTreeType(String type, String color, String texture) {
        String key = type + "-" + color + "-" + texture;
        if (!treeMap.containsKey(key)) {
            treeMap.put(key, new TreeType(type, color, texture));
        }
        return treeMap.get(key);
    }
}