public class Vulkan {
    
    private VideoGame game;

    public Vulkan(VideoGame game){
        this.game = game;
    }

    public void control(XInputController controller, String input){
        controller.control(game, input);
    }

}
