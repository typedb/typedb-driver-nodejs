interface Entity extends Thing {

}

interface RemoteEntity extends Remote<Entity>, Entity {
    getType(): EntityType;
}