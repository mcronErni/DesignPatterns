public class Main {
    public static void main(String[] args) {
        
        var textData = new TextData();

        textData.setContent("hello, friend");

        System.out.println("TEST FOR NORMAL TEXT");
        var textStream = new TextStream();
        textStream.write(textData);

        System.out.println("TEST FOR DECORATED TEXT");
        var textStream2 = new BoldTextStream(new ItalicTextStream(new TextStream()));
        textStream2.write(textData);

    }
}
