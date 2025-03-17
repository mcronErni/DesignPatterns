public class Main {
    public static void main(String[] args) {
        var originalFile = new File("Sample Text", "txt");
        var clone = (File)originalFile.clone();

        System.out.println(originalFile.getContent());
        System.out.println(clone.getContent());
    }
}
