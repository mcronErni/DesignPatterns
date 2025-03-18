// Observer interface
interface Observer {
    update(): void;
  }
  
  // Base subject class
  abstract class CharacterBaseSubject {
    private observers: Observer[] = [];
  
    public addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    public removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    protected notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  // Weapon class
  class Weapon {
    private weaponInfo: Map<string, any>;
  
    constructor(weaponInfo: Map<string, any>) {
      this.weaponInfo = weaponInfo;
    }
  
    public getWeaponInfo(): Map<string, any> {
      return this.weaponInfo;
    }
  
    public setWeaponInfo(weaponInfo: Map<string, any>): void {
      this.weaponInfo = weaponInfo;
    }
  }
  
  // Character Stats class
  class CharacterStats extends CharacterBaseSubject {
    private weaponInfo: Weapon | null = null;
  
    public setEquippedWeapon(weaponInfo: Weapon): void {
      this.weaponInfo = weaponInfo;
      console.log(`Character Equipped: ${weaponInfo.getWeaponInfo().get("Name")}`);
      
      weaponInfo.getWeaponInfo().forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });
      
      this.notifyObservers();
    }
  
    public getEquippedWeapon(): Weapon | null {
      return this.weaponInfo;
    }
  }
  
  // Character Stats UI class
  class CharacterStatsUI implements Observer {
    private characterStats: CharacterStats;
    private weaponInfo: Weapon | null = null;
  
    constructor(characterStats: CharacterStats) {
      this.characterStats = characterStats;
    }
  
    public update(): void {
      this.weaponInfo = this.characterStats.getEquippedWeapon();
      if (this.weaponInfo) {
        console.log(`Character stats updated to match the stats of ${this.weaponInfo.getWeaponInfo().get("Name")}`);
      }
    }
  }
  
  // Main function
  function main(): void {
    const weaponStats = new Map<string, any>();
    weaponStats.set("Name", "Sample MNK Weapon");
    weaponStats.set("Atk", 300);
    weaponStats.set("Dex", 280);
    weaponStats.set("EHR", 275);
    
    const weapon = new Weapon(weaponStats);
    
    const characterStats = new CharacterStats();
    const characterStatsUI = new CharacterStatsUI(characterStats);
    
    characterStats.addObserver(characterStatsUI);
    characterStats.setEquippedWeapon(weapon);
  }
  
  // Run the main function
  main();