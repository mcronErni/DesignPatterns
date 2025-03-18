/**
 * Logistics Chain of Responsibility Pattern
 * Converted from Java to TypeScript
 */

// Package class (element being processed in the chain)
class Package {
    private region: string;
    private maxDeliveryDuration: number;
  
    constructor(region: string, maxDeliveryDuration: number) {
      this.region = region;
      this.maxDeliveryDuration = maxDeliveryDuration;
    }
  
    public getRegion(): string {
      return this.region;
    }
  
    public getMaxDeliveryDuration(): number {
      return this.maxDeliveryDuration;
    }
  }
  
  // Abstract handler class
  abstract class CourierHandler {
    private next: CourierHandler | null = null;
  
    public setNextHandler(next: CourierHandler | null): void {
      this.next = next;
    }
  
    public handle(pkg: Package): void {
      if (this.doHandle(pkg)) {
        return;
      }
      
      if (this.next != null) {
        this.next.handle(pkg);
      }
    }
  
    public abstract doHandle(pkg: Package): boolean;
  }
  
  // Concrete handler - Land Courier
  class LandCourier extends CourierHandler {
    public doHandle(pkg: Package): boolean {
      if (pkg.getRegion() === "Same Region") {
        console.log("Package Delivered By Land Courier");
        return true;
      }
      console.log("Can't Deliver the Package by Land");
      return false;
    }
  }
  
  // Concrete handler - Sea Courier
  class SeaCourier extends CourierHandler {
    public doHandle(pkg: Package): boolean {
      if (pkg.getRegion() === "Other Region" && pkg.getMaxDeliveryDuration() > 7) {
        console.log("Package Delivered By Sea Courier");
        return true;
      }
      console.log("Can't Deliver the Package by Sea");
      return false;
    }
  }
  
  // Concrete handler - Air Courier
  class AirCourier extends CourierHandler {
    public doHandle(pkg: Package): boolean {
      if (pkg.getRegion() === "Other Region" && pkg.getMaxDeliveryDuration() < 7) {
        console.log("Package Delivered By Air Courier");
        return true;
      }
      console.log("Can't Deliver the Package");
      return false;
    }
  }
  
  // Client class that uses the chain
  class LogisticsHub {
    private handler: CourierHandler;
  
    constructor(handler: CourierHandler) {
      this.handler = handler;
    }
  
    public handle(pkg: Package): void {
      console.log(`Package with Destination: ${pkg.getRegion()} was handed to ${this.handler.constructor.name}`);
      this.handler.handle(pkg);
    }
  }
  
  // Main function
  function main(): void {
    const airCourier = new AirCourier();
    const seaCourier = new SeaCourier();
    const landCourier = new LandCourier();
  
    landCourier.setNextHandler(seaCourier);
    seaCourier.setNextHandler(airCourier);
    airCourier.setNextHandler(null);
  
    const logisticsHub = new LogisticsHub(landCourier);
  
    console.log("Package 1: Same Region, Duration: <6 Days");
    logisticsHub.handle(new Package("Same Region", 6));
    
    console.log("\n");
    console.log("Package 2: Other Region, Duration: >6 Days");
    logisticsHub.handle(new Package("Other Region", 15));
    
    console.log("\n");
    console.log("Package 3: Other Region, Duration: <6 Days");
    logisticsHub.handle(new Package("Other Region", 6));
  }
  
  // Run the main function
  main();