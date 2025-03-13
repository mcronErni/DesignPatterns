
import java.util.Map;

public class CharacterStats extends CharacterBaseSubject {

    private Weapon weaponInfo;

    // public CharacterStats(Weapon weaponInfo) {
    //     this.weaponInfo = weaponInfo;
    // }

    public void setEquippedWeapon(Weapon weaponInfo){
        this.weaponInfo = weaponInfo;
        System.out.println("Character Equipped: " + weaponInfo.getWeaponInfo().get("Name"));
        for(Map.Entry<String, Object> entry : weaponInfo.getWeaponInfo().entrySet()){
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
        notifyObservers();
    }

    public Weapon getEquippedWeapon(){
        return weaponInfo;
    }

}
