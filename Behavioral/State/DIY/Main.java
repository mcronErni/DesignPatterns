public class Main {
    public static void main(String[] args) {

        clickMouse(new RightHandedMouse());
        System.out.println(); // temporary; separate outputs
        clickMouse(new LeftHandedMouse());
        System.out.println();


        //using new instance
        System.out.println("using new object/instance");
        Mouse newMouse = new RightHandedMouse();
        newMouse.leftClick();
        newMouse.leftClick();
    } 

    public static void clickMouse(Mouse control){
        control.hover();
        control.leftClick();
        control.rightClick();
    }

}
