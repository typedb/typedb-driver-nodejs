interface Entity extends Thing {

}

interface RemoteEntity extends Merge<RemoteThing, Entity> {
    getType(): EntityType;
}