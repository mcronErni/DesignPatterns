public class OpenAIAssistantCommand implements Command {

    private Phone phone;

    public OpenAIAssistantCommand(Phone phone) {
        this.phone = phone;
    }

    @Override
    public void execute() {
        phone.openAIAssistant();
    }

}
