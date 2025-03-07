import java.util.ArrayDeque;
import java.util.Deque;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author extcrmh
 */
public class History {
    private final Deque<EditorState> states = new ArrayDeque<>();

    public void push(EditorState state){
        states.push(state);
    }

    public EditorState pop(){
        return states.pop();
    }
}
