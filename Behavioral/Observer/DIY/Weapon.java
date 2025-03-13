
import java.util.Map;

public class Weapon {
    private Map<String, Object> weaponInfo;

    public Weapon(Map<String, Object> weaponInfo) {
        this.weaponInfo = weaponInfo;
    }

    public Map<String, Object> getWeaponInfo() {
        return weaponInfo;
    }

    public void setWeaponInfo(Map<String, Object> weaponInfo) {
        this.weaponInfo = weaponInfo;
    }

}
