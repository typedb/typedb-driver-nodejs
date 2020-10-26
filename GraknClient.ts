

class GraknClient {
    constructor(uri: string, credentials: object) {
        // Open grpc node clients. A grpc node client is composed of stub + channel.
        // When creating clients to the same uri, the channel will be automatically shared.
        const sessionClient = new sessionServices.SessionServiceClient(uri, grpc.credentials.createInsecure());
        const keyspaceClient = new keyspaceServices.KeyspaceServiceClient(uri, grpc.credentials.createInsecure());
        const keyspaceService = new KeyspaceService(keyspaceClient, credentials);
        this.session = async (keyspace) => {
            const session = new Session(sessionClient);
            await session.open(keyspace, credentials);
            return session;
        };
        this.keyspaces = () => ({
            delete: (keyspace) => keyspaceService.delete(keyspace),
            retrieve: () => keyspaceService.retrieve()
        });
        this.close = () => {
            grpc.closeClient(sessionClient);
            grpc.closeClient(keyspaceClient);
        };
    }
}

module.exports = GraknClient