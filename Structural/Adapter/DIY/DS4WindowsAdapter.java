public class DS4WindowsAdapter implements XInputController {

    public DS4Controller ds4Controller;

    public DS4WindowsAdapter(DS4Controller ds4Controller) {
        this.ds4Controller = ds4Controller;
    }

    @Override
    public void control(VideoGame game, String input) {
        ds4Controller.init();
        input = mapDInputToXInput(input);
        ds4Controller.dControl(game, input);    
    }

    public String mapDInputToXInput(String input){
        return switch (input) {
            case "A" -> "X";
            case "B" -> "O";
            case "X" -> "🔺";
            case "Y" -> "⏹️";
            default -> null;
        };
    }
    
}
