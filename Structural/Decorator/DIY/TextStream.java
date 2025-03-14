public class TextStream implements Stream {

    @Override
    public void write(TextData data) {
        System.out.println("Final Output: "+ data.getContent());
        System.out.println("Qualities:");

        if(data.getQualities().size() <= 0){
            System.out.println("Regular Text");
        }

        for( var quality : data.getQualities()){
            System.out.println(quality);
        }
    }

}
