abstract class TypeImpl implements Type {
    private label:  string;
    private root: boolean;
    private hash:   int;

    constructor(label: string, root: boolean) {
        if (!label) throw("Type Label missing.");

        this.label = label;
        this.root = root;
        this.hash = hash(this.label);
    }

    equals(): boolean

    hashCode(): number {
        return this.hash;
    }

    asAttributeType(): AttributeType {
        throw "Invalid cast to Attribute Type.";
    }

    asEntityType(): EntityType {
        throw "Invalid cast to Entity Type.";
    }

    asRelationType(): RelationType {
        throw "Invalid cast to Relation Type.";
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return undefined;
    }

    asRoleType(): RoleType {
        throw "Invalid cast to Role Type.";
    }

    asThing(): Thing {
        throw "Invalid cast to Thing.";
    }

    asThingType(): ThingType {
        throw "Invalid cast to Thing Type.";
    }

    asType(): Type {
        return this;
    }

    getLabel(): string {
        return this.label;
    }

    isRemote(): boolean {
        return false;
    }

    isRoot(): boolean {
        return this.root;
    }
}