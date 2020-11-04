interface Entity extends Thing {
    asRemote(transaction: Transaction): RemoteEntity;
}

interface RemoteEntity extends Merge<RemoteThing, Entity> {
    getType(): EntityType;
    asRemote(transaction: Transaction): RemoteEntity;
}