public class XboxController implements XInputController{

    @Override
    public void control(VideoGame game, String input) {
        switch (input) {
            case "A" -> System.out.println("Character Jumped");
            case "B" -> System.out.println("Character Rolled");
            case "X" -> System.out.println("Character Used an Item");
            case "Y" -> System.out.println("Character Changed Weapon");
            default -> System.out.println("no action");
        }
    }

}
