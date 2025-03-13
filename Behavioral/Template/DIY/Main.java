public class Main {
    public static void main(String[] args) {

        var logRegTrain = new LogisticRegressionTraining();
        logRegTrain.execute();
        
        var svmTrain = new SupportVectorMachine();
        svmTrain.execute();

        var rfTrain = new RandomForest();
        rfTrain.execute();
    }
}
