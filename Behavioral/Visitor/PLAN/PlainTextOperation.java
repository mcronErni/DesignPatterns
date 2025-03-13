public class PlainTextOperation implements Operation{

    @Override
    public void apply(HeadingNode heading) {
        // TODO Auto-generated method stub
        System.out.println("text-heading");
    }

    @Override
    public void apply(AnchorNode anchor) {
        // TODO Auto-generated method stub
        System.out.println("text-anchor");
    }

}
