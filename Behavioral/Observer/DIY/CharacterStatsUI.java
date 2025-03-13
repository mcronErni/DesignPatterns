public class CharacterStatsUI implements Observer {

    private CharacterStats characterStats;
    private Weapon weaponInfo;

    public CharacterStatsUI(CharacterStats characterStats) {
        this.characterStats = characterStats;
    }

    @Override
    public void update() {
        this.weaponInfo = characterStats.getEquippedWeapon();
        System.out.println("Character stats updated to match the stats of " + weaponInfo.getWeaponInfo().get("Name"));
    }

}
