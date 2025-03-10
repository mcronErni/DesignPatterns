public class XGBoost implements MLAlgorithm {

    @Override
    public void train(String data) {
        System.out.println(String.format("Received %s", data));
        System.out.println("Training new model using eXtreme Gradient Boosting");
        System.out.println("XGBoost: 80% Accuracy");
    }

}
