public class ItalicTextStream implements Stream{

    private Stream stream;

    public ItalicTextStream(Stream stream) {
        this.stream = stream;
    }

    @Override
    public void write(TextData data) {
        var italicData = makeItalic(data);
        stream.write(italicData);
    }

    private TextData makeItalic(TextData data){
        data.addQualities("Italic");
        return data;
    }

}
