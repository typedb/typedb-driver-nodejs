interface EConcept {
    asRemote(): ERemoteConcept;
    asThing(): EThing;
}

interface ERemoteConcept extends EConcept {
    asRemote(): this;
    asThing(): ERemoteThing;
}

interface EThing extends EConcept {
    asRemote(): ERemoteThing;
}

interface ERemoteThing extends Merge<ERemoteConcept, EThing> {

}

abstract class EThingImpl implements EThing {
    abstract asRemote(): ERemoteThing;
    abstract asThing(): EThing;
}

abstract class ERemoteThingImpl implements ERemoteThing {
    asRemote() {
        return this;
    }
    abstract asThing(): ERemoteThing;
}

interface ERelation extends EThing {
    asRemote(): ERemoteRelation;
    asRelation(): ERelation;
}

interface ERemoteRelation extends Merge<ERemoteThing, ERelation> {

}

class ERelationImpl extends EThingImpl implements ERelation {
    asRemote() {
        return new ERemoteRelationImpl();
    }

    asThing() {
        return this;
    }

    asRelation() {
        return this;
    }
}

class ERemoteRelationImpl extends ERemoteThingImpl implements ERemoteRelation {
    constructor() {
        super();
    }

    asRemote() {
        return this;
    }

    asThing() {
        return this;
    }

    asRelation() {
        return this;
    }
}