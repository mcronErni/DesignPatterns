class TimeLogger {
    startLogging(): void {
        console.log(`Model Creation Started: ${new Date().toLocaleTimeString()}`);
    }

    stopLogging(): void {
        console.log(`Model Creation Stopped: ${new Date().toLocaleTimeString()}`);
    }
}

abstract class CreateModel {
    private timeLogger: TimeLogger;

    constructor(timeLogger?: TimeLogger) {
        this.timeLogger = timeLogger || new TimeLogger();
    }

    protected scrapeData(): void {
        console.log("Scraping data from the web");
    }

    protected compileData(): void {
        console.log("Compiling scraped data");
    }

    protected cleanData(): void {
        console.log("Cleaning Data");
    }

    execute(): void {
        this.timeLogger.startLogging();
        this.scrapeData();
        this.compileData();
        this.cleanData();
        this.trainModel();
        this.timeLogger.stopLogging();
        console.log("\n");
    }

    protected abstract trainModel(): void;
}

class LogisticRegressionTraining extends CreateModel {
    protected trainModel(): void {
        console.log("Training Model using Logistic Regression");
    }
}

class RandomForest extends CreateModel {
    protected trainModel(): void {
        console.log("Training Model using Random Forest");
    }
}

class SupportVectorMachine extends CreateModel {
    protected trainModel(): void {
        console.log("Training Model using SVM");
    }
}

// Main Execution
const logRegTrain = new LogisticRegressionTraining();
logRegTrain.execute();

const svmTrain = new SupportVectorMachine();
svmTrain.execute();

const rfTrain = new RandomForest();
rfTrain.execute();
