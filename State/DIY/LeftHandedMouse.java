public class LeftHandedMouse extends Mouse {

    @Override
    public void leftClick() {

        System.out.println("You Left Clicked a LEFT Handed Mouse:");
        System.out.println("You OPENED OPTIONS for the item.");
        
    }
    
    @Override
    public void rightClick() {
        
        System.out.println("You Right Clicked a LEFT Handed Mouse:");
        System.out.println("You SELECTED the item.");
        
    }

}
