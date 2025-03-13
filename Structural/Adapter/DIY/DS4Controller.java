public class DS4Controller {

    public void init(){
        System.out.println("DS4 initialized.");
    }

    public void dControl(VideoGame game, String input){
        switch (input) {
            case "X" -> System.out.println("Character Jumped");
            case "O" -> System.out.println("Character Rolled");
            case "🔺" -> System.out.println("Character Used an Item");
            case "⏹️" -> System.out.println("Character Changed Weapon");
            default -> System.out.println("no action");
        }
    }

}
