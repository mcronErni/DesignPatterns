public abstract class CreateModel {
    private TimeLogger timeLogger;

    public CreateModel() {
        timeLogger = new TimeLogger();
    }
    
    public CreateModel(TimeLogger timeLogger) {
        this.timeLogger = timeLogger;
    }

    protected void scrapeData(){
        System.out.println("Scraping data from the web");
    }

    protected void compileData(){
        System.out.println("Compiling scraped data");
    }

    protected void cleanData(){
        System.out.println("Cleaning Data");
    }

    public void execute(){
        timeLogger.startLogging();
        scrapeData();
        compileData();
        cleanData();
        trainModel();
        timeLogger.stopLogging();
        System.out.println("\n");
    }

    protected abstract void trainModel();

}
