export interface Image {
    display(): void;
}

export class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk(filename);
    }

    private loadFromDisk(filename: string): void {
        console.log(`Loading ${filename} from disk...`);
    }

    public display(): void {
        console.log(`Displaying ${this.filename}`);
    }
}

export class ImageProxy implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    public display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Main function to demonstrate the usage
function main() {
    const image: Image = new ImageProxy("test.jpg");
    image.display();
    image.display();
}

main();
