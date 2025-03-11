public class PowerButton {
    private Command shortPressCommand;
    private Command longPressCommand;

    public void setShortPressCommand(Command shortPressCommand) {
        this.shortPressCommand = shortPressCommand;
    }

    public void setLongPressCommand(Command longPressCommand) {
        this.longPressCommand = longPressCommand;
    }

    public void longPress(){
        if(longPressCommand != null){
            longPressCommand.execute();
        }
    }

    public void shortPress(){
        if(shortPressCommand != null){
            shortPressCommand.execute();
        }
    }
}
