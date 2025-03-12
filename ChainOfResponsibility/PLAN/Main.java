public class Main {
    public static void main(String[] args) {
        var encryptor = new Encryptor(null);
        var compressor = new Compressor(encryptor);
        var logger = new Logger(compressor);
        var authenticator = new Authenticator(logger);
        var server = new WebServer(authenticator);
        server.handle(new HttpRequest("admin","1234"));
    }
}
