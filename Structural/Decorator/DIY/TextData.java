import java.util.ArrayList;
import java.util.List;

public class TextData {
    private String content;
    private List<String> qualities = new ArrayList<>();

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<String> getQualities() {
        return qualities;
    }

    public void addQualities(String quality) {
        qualities.add(quality);
    }
}
