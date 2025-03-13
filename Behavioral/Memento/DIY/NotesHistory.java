
import java.util.ArrayDeque;
import java.util.Deque;

public class NotesHistory {
    public Deque<NotesState> undoStates = new ArrayDeque<>();

    public Deque<NotesState> redoStates = new ArrayDeque<>();

    public void pushToUndo(NotesState state){
        undoStates.push(state);
    }

    public NotesState popFromUndo(){
        return undoStates.pop();
    }

    public void pushToRedo(NotesState state){
        redoStates.push(state);
    }

    public NotesState popFromRedo(){
        return redoStates.pop();
    }

}
