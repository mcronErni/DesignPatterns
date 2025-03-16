import java.util.Random;

public class Main{
    public static void main(String[] args) {

        Random rand = new Random();
        int treeDensity = 5;

        TreeFactory treeFactory = new TreeFactory();

        for (int i = 0; i < treeDensity; i++) {
            TreeFlyweight oak = treeFactory.getTreeType("Oak", "Green", "Rough");
            oak.display(rand.nextInt(500), rand.nextInt(500));
        }

        for (int i = 0; i < treeDensity / 2; i++) {
            TreeFlyweight pine = TreeFactory.getTreeType("Pine", "Dark Green", "Smooth");
            pine.display(rand.nextInt(500), rand.nextInt(500));
        }
    }
}