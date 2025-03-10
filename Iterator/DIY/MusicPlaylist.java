
import java.util.ArrayList;
import java.util.List;

public class MusicPlaylist {
    private List<String> songs = new ArrayList<>();

    public void push(String song){
        songs.add(song);
    }

    public String pop(){
        var lastIndex = songs.size() - 1;
        var lastSong = songs.get(lastIndex);
        songs.remove(lastIndex);
        return lastSong;
    }

    public SongIterator createIterator(){
        return new ListIterator(this);
    }

    public class ListIterator implements SongIterator{
        private MusicPlaylist playlist;
        private int index;

        public ListIterator(MusicPlaylist playlist) {
            this.playlist = playlist;
        }

        @Override
        public boolean hasNext() {
            return (index < playlist.songs.size());
        }

        @Override
        public String current() {
            return playlist.songs.get(index);
        }

        @Override
        public void next() {
            index++;
        }


    }
}
