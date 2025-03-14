public class CompressedCloudStream implements Stream {
    
    private Stream stream;

    public CompressedCloudStream(Stream stream) {
        this.stream = stream;
    }

    @Override
    public void write(String data) {
        // TODO Auto-generated method stub
        var compressed = compress(data);
        stream.write(compressed);
    }

    private String compress(String data){
        return data.substring(0,5);
    }

}
