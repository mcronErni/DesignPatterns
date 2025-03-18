export interface TreeFlyweight {
    display(x: number, y: number): void;
}

export class TreeType implements TreeFlyweight {
    private readonly type: string;
    private readonly color: string;
    private readonly texture: string;

    constructor(type: string, color: string, texture: string) {
        this.type = type;
        this.color = color;
        this.texture = texture;
    }

    public display(x: number, y: number): void {
        console.log(`Displaying ${this.type} tree at (${x}, ${y}) with color ${this.color}`);
    }
}

export class TreeFactory {
    private static treeMap: Map<string, TreeFlyweight> = new Map();

    public static getTreeType(type: string, color: string, texture: string): TreeFlyweight {
        const key = `${type}-${color}-${texture}`;
        if (!this.treeMap.has(key)) {
            this.treeMap.set(key, new TreeType(type, color, texture));
        }
        return this.treeMap.get(key)!;
    }
}

// Main function to demonstrate the usage
function main() {
    const treeDensity = 5;

    for (let i = 0; i < treeDensity; i++) {
        const oak = TreeFactory.getTreeType("Oak", "Green", "Rough");
        oak.display(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
    }

    for (let i = 0; i < treeDensity / 2; i++) {
        const pine = TreeFactory.getTreeType("Pine", "Dark Green", "Smooth");
        pine.display(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
    }
}

main();
