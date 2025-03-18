export interface Stream {
    write(data: TextData): void;
}

export class TextData {
    private content: string;
    private qualities: string[] = [];

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getQualities(): string[] {
        return this.qualities;
    }

    public addQualities(quality: string): void {
        this.qualities.push(quality);
    }
}

export class TextStream implements Stream {
    public write(data: TextData): void {
        console.log("Final Output: " + data.getContent());
        console.log("Qualities:");

        if (data.getQualities().length <= 0) {
            console.log("Regular Text");
        }

        for (const quality of data.getQualities()) {
            console.log(quality);
        }
    }
}

export class ItalicTextStream implements Stream {
    private stream: Stream;

    constructor(stream: Stream) {
        this.stream = stream;
    }

    public write(data: TextData): void {
        const italicData = this.makeItalic(data);
        this.stream.write(italicData);
    }

    private makeItalic(data: TextData): TextData {
        data.addQualities("Italic");
        return data;
    }
}

export class BoldTextStream implements Stream {
    private stream: Stream;

    constructor(stream: Stream) {
        this.stream = stream;
    }

    public write(data: TextData): void {
        const boldData = this.makeBold(data);
        this.stream.write(boldData);
    }

    private makeBold(data: TextData): TextData {
        data.addQualities("Bold");
        return data;
    }
}

// Main function to demonstrate the usage
function main() {
    const textData = new TextData();
    textData.setContent("hello, friend");

    console.log("TEST FOR NORMAL TEXT");
    const textStream = new TextStream();
    textStream.write(textData);

    console.log("TEST FOR DECORATED TEXT");
    const textStream2 = new BoldTextStream(new ItalicTextStream(new TextStream()));
    textStream2.write(textData);
}

main();
