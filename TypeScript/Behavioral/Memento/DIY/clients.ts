/**
 * Notes Memento Pattern Implementation in TypeScript
 * Converted from Java implementation
 */

// The Memento class (NotesState in Java)
class NotesState {
    private readonly text: string;
  
    constructor(passedText: string) {
      this.text = passedText;
    }
  
    public getText(): string {
      return this.text;
    }
  }
  
  // The Originator class (Notes in Java)
  class Notes {
    private text: string = '';
  
    public createState(): NotesState {
      return new NotesState(this.text);
    }
  
    public restore(state: NotesState): void {
      this.text = state.getText();
    }
  
    public getText(): string {
      return this.text;
    }
  
    public setText(newText: string): void {
      this.text = newText;
    }
  }
  
  // The Caretaker class (NotesHistory in Java)
  class NotesHistory {
    private undoStates: NotesState[] = [];
    private redoStates: NotesState[] = [];
  
    public pushToUndo(state: NotesState): void {
      this.undoStates.push(state);
    }
  
    public popFromUndo(): NotesState {
      const state = this.undoStates.pop();
      if (state === undefined) {
        throw new Error("No more undo states available");
      }
      return state;
    }
  
    public pushToRedo(state: NotesState): void {
      this.redoStates.push(state);
    }
  
    public popFromRedo(): NotesState {
      const state = this.redoStates.pop();
      if (state === undefined) {
        throw new Error("No more redo states available");
      }
      return state;
    }
  }
  
  // Main function
  function main(): void {
    const notes = new Notes();
    const history = new NotesHistory();
  
    notes.setText("Hello. This is the first note");
    history.pushToUndo(notes.createState());
  
    // history.push and create state may be used before appending or changing state
    notes.setText("Hello. This is the first note \n This is the 2nd text");
  
    // everytime we undo, we should create state and push to redo
    // undo
    history.pushToRedo(notes.createState());
    notes.restore(history.popFromUndo());
    
    // redo
    notes.restore(history.popFromRedo());
  
    console.log(notes.getText());
  }
  
  // Run the main function
  main();