public class Notes {
    private String text;

    public NotesState createState(){
        return new NotesState(text);
    }

    public void restore(NotesState state){
        text = state.getText();
    }

    public String getText(){
        return text;
    }

    public void setText(String newText){
        text = newText;
    }
}
