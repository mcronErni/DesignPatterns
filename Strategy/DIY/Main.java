public class Main {
    public static void main(String[] args) {
        var modelTrainer = new ModelTrainer();
        modelTrainer.train("Sample DF data", new LogisticRegression());
        modelTrainer.train("Sample DF data2", new XGBoost());
    }
}
