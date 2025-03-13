public class Main {
    public static void main(String[] args) {
        var imageStorage = new ImageStorage();

        imageStorage.store(
            "a",
            new JPEGCompressor(),
            new BlackAndWhiteFilter()
        );
        
        imageStorage.store(
            "a",
            new PNGCompressor(),
            new BlackAndWhiteFilter()
        );
    }
}
