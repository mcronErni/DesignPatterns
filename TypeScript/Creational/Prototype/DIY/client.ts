export interface Cloneable {
    clone(): Cloneable;
}

export class File implements Cloneable {
    private content: string;
    private fileType: string;

    constructor(content: string, fileType: string) {
        this.content = content;
        this.fileType = fileType;
    }

    clone(): Cloneable {
        return new File(this.content, this.fileType);
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
    }

    getFileType(): string {
        return this.fileType;
    }

    setFileType(fileType: string): void {
        this.fileType = fileType;
    }
}

// Main function to demonstrate the usage
function main() {
    const originalFile = new File("Sample Text", "txt");
    const clone = originalFile.clone() as File;

    console.log(originalFile.getContent());
    console.log(clone.getContent());
}

main();
