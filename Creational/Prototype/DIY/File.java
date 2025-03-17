public class File implements Cloneable {

    private String content;
    
    private String fileType;
    
    public File(String content, String fileType) {
        this.content = content;
        this.fileType = fileType;
    }

    @Override
    public Cloneable clone() {
        return new File(this.content, this.fileType);
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

}
