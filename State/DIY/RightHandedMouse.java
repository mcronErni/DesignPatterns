public class RightHandedMouse extends Mouse{

    @Override
    public void leftClick() {

        System.out.println("You Left Clicked a RIGHT Handed Mouse:");
        System.out.println("You SELECTED the item.");
        
    }

    @Override
    public void rightClick() {
        
        System.out.println("You Right Clicked a RIGHT Handed Mouse:");
        System.out.println("You OPENED OPTIONS for the item.");
        
    }

}
