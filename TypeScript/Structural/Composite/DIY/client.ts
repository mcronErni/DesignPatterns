export abstract class ComponentAbstract {
    protected name: string;
    protected type: string;
    protected parent: DirectoryAbstract | null;

    constructor(name: string, type: string, parent: DirectoryAbstract | null = null) {
        this.name = name;
        this.type = type;
        this.parent = parent;
    }

    public checkDetails(): void {
        console.log(`Details:\nName: ${this.name}\nType: ${this.type}`);
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

    public list(): void {
        this.list("");
    }

    public abstract list(indent: string): void;
    public abstract delete(): void;
}

export abstract class DirectoryAbstract extends ComponentAbstract {
    protected components: ComponentAbstract[] = [];

    constructor(name: string, type: string, parent: DirectoryAbstract | null = null) {
        super(name, type, parent);
    }

    public add(component: ComponentAbstract): void {
        this.components.push(component);
        console.log(`${component.getName()}:${component.getType()} was added to ${this.name}`);
    }

    public removeComponent(component: ComponentAbstract): void {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
            console.log(`${component.getName()} was removed from ${this.name}`);
        }
    }

    public delete(): void {
        for (const component of this.components) {
            console.log(`${component.getName()}:${component.getType()} deleted`);
            component.delete();
        }
        this.components = [];

        if (this.parent !== null) {
            this.parent.removeComponent(this);
            console.log(`${this.name} was deleted.`);
        }
    }

    public list(indent: string): void {
        console.log(indent + this.name);
        const newIndent = indent + "    ";
        for (const component of this.components) {
            component.list(newIndent);
        }
    }
}

export class Backlogs extends DirectoryAbstract {
    constructor(name: string, parent: DirectoryAbstract | null = null) {
        super(name, "Backlog", parent);
    }
}

export class Epic extends DirectoryAbstract {
    constructor(name: string, parent: DirectoryAbstract | null = null) {
        super(name, "Epic", parent);
    }
}

// Main function to demonstrate the usage
function main() {
    const backlogs = new Backlogs("Bootcamper Backlogs");

    const epic1 = new Epic("Advanced Backend Development", backlogs);
    const epic2 = new Epic("Code Quality", backlogs);
    const epic3 = new Epic("Cloud Development", epic2);
    const epic4 = new Epic("Quality Testing", epic3);

    backlogs.add(epic1);
    epic2.add(epic3);
    epic3.add(epic4);
    backlogs.add(epic2);
    backlogs.list();

    epic2.delete();
    backlogs.list();
}

main();
