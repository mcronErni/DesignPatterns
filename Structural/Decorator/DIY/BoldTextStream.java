

public class BoldTextStream implements Stream {
    private Stream stream;

    public BoldTextStream(Stream stream) {
        this.stream = stream;
    }

    @Override
    public void write(TextData data) {
        var boldData = makeBold(data);
        stream.write(boldData);
    }

    private TextData makeBold(TextData data){
        data.addQualities("Bold");
        return data;
    }
    
}
