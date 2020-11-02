interface Entity extends Thing {

}

interface RemoteEntity extends Merge<Remote<Entity>, Entity> {
    getType(): EntityType;
}