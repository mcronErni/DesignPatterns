abstract class Mouse {
    hover(): void {
        console.log("Hovering mouse");
    }

    abstract leftClick(): void;
    abstract rightClick(): void;
}

class LeftHandedMouse extends Mouse {
    leftClick(): void {
        console.log("You Left Clicked a LEFT Handed Mouse:");
        console.log("You OPENED OPTIONS for the item.");
    }

    rightClick(): void {
        console.log("You Right Clicked a LEFT Handed Mouse:");
        console.log("You SELECTED the item.");
    }
}

class RightHandedMouse extends Mouse {
    leftClick(): void {
        console.log("You Left Clicked a RIGHT Handed Mouse:");
        console.log("You SELECTED the item.");
    }

    rightClick(): void {
        console.log("You Right Clicked a RIGHT Handed Mouse:");
        console.log("You OPENED OPTIONS for the item.");
    }
}

function clickMouse(control: Mouse): void {
    control.hover();
    control.leftClick();
    control.rightClick();
}

// Main Execution
clickMouse(new RightHandedMouse());
console.log(); // Separate outputs
clickMouse(new LeftHandedMouse());
console.log();

// Using a new instance
console.log("using new object/instance");
const newMouse: Mouse = new RightHandedMouse();
newMouse.leftClick();
newMouse.leftClick();
