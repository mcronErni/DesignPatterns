public class LogisticRegression implements MLAlgorithm {

    @Override
    public void train(String data) {
        System.out.println(String.format("Received %s", data));
        System.out.println("Training new model using Logistic Regression");
        System.out.println("Logistic Regression: 76% Accuracy");
    }

}
