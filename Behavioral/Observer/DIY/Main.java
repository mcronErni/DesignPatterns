
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {

        Map<String, Object> weaponStats = new HashMap<>();
        weaponStats.put("Name", "Sample MNK Weapon");
        weaponStats.put("Atk", 300);
        weaponStats.put("Dex", 280);
        weaponStats.put("EHR", 275);
        
        var weapon = new Weapon(weaponStats);

        var characterStats = new CharacterStats();
        var CharacterStatsUI = new CharacterStatsUI(characterStats);
        
        
        characterStats.addObserver(CharacterStatsUI);
        characterStats.setEquippedWeapon(weapon);

    }
}
