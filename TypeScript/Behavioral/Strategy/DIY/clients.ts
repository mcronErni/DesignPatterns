interface MLAlgorithm {
    train(data: string): void;
}

class XGBoost implements MLAlgorithm {
    train(data: string): void {
        console.log(`Received ${data}`);
        console.log("Training new model using eXtreme Gradient Boosting");
        console.log("XGBoost: 80% Accuracy");
    }
}

class LogisticRegression implements MLAlgorithm {
    train(data: string): void {
        console.log(`Received ${data}`);
        console.log("Training new model using Logistic Regression");
        console.log("Logistic Regression: 76% Accuracy");
    }
}

class ModelTrainer {
    train(data: string, algorithm: MLAlgorithm): void {
        algorithm.train(data);
    }
}

// Main Execution
const modelTrainer = new ModelTrainer();
modelTrainer.train("Sample DF data", new LogisticRegression());
modelTrainer.train("Sample DF data2", new XGBoost());
