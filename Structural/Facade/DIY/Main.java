public class Main {
    public static void main(String[] args) {
        
        var gameMode = new GameModeFacade();
        
        System.out.println("User Enables Game Mode");
        gameMode.toggleGameMode();

        System.out.println("User toggled the game mode");
        gameMode.toggleGameMode();

    }
}
