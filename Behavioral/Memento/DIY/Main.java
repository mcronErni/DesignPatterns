/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author extcrmh
 */
public class Main {

    public static void main(String[] args) {
        var notes = new Notes();
        var history = new NotesHistory();

        notes.setText("Hello. This is the first note");
        history.pushToUndo(notes.createState());

        //history.push and create state may be used before appending or changing state

        notes.setText("Hello. This is the first note \n This is the 2nd text");

        // everytime i undo, i should create state and push to redo
        //undo
        history.pushToRedo(notes.createState());
        notes.restore(history.popFromUndo());
        //redo
        notes.restore(history.popFromRedo());

        System.out.print(notes.getText());
    }

}
