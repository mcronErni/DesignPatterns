public class Main {
    public static void main(String[] args) {
        var playlist = new MusicPlaylist();
        playlist.push("Daisy");
        playlist.push("Color Your Night");
        playlist.push("Endwalker");

        SongIterator iterator = playlist.createIterator();
        while(iterator.hasNext()){
            var song =  iterator.current();
            System.out.println(song);
            iterator.next();
        }

    }
}
