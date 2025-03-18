/**
 * Music Playlist with Iterator Pattern
 * Converted from Java to TypeScript
 */

// Iterator interface
interface SongIterator {
    hasNext(): boolean;
    current(): string;
    next(): void;
  }
  
  // Collection class with iterator implementation
  class MusicPlaylist {
    private songs: string[] = [];
  
    public push(song: string): void {
      this.songs.push(song);
    }
  
    public pop(): string {
      const lastIndex = this.songs.length - 1;
      const lastSong = this.songs[lastIndex];
      this.songs.splice(lastIndex, 1);
      return lastSong;
    }
  
    public createIterator(): SongIterator {
      return new ListIterator(this);
    }
  
    // Inner class for the iterator - implemented as a nested class in TypeScript
    private ListIterator = class implements SongIterator {
      private playlist: MusicPlaylist;
      private index: number = 0;
  
      constructor(playlist: MusicPlaylist) {
        this.playlist = playlist;
      }
  
      public hasNext(): boolean {
        return (this.index < this.playlist.songs.length);
      }
  
      public current(): string {
        return this.playlist.songs[this.index];
      }
  
      public next(): void {
        this.index++;
      }
    }
  }
  
  // Main function
  function main(): void {
    const playlist = new MusicPlaylist();
    playlist.push("Daisy");
    playlist.push("Color Your Night");
    playlist.push("Endwalker");
  
    const iterator = playlist.createIterator();
    while (iterator.hasNext()) {
      const song = iterator.current();
      console.log(song);
      iterator.next();
    }
  }
  
  // Run the main function
  main();