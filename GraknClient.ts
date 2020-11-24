const DEFAULT_URI = "localhost:48555"

export class GraknClient {
    private channel: ManagedChannel;
    private keyspaces: Keyspaces;
    private username: string;
    private password: string;


    constructor(address = DEFAULT_URI, username: string, password: string) {
        this.username = username;
        this.password = password;
        this.channel = ManagedChannelBuilder.forTarget(address)
            .usePlaintext().build();
        this.keyspaces = new Keyspaces(this.channel, this.username, this.password);
    }
}

export class Keyspaces {
    constructor(channel: ManagedChannel, username: string, password: string) {
    }
}