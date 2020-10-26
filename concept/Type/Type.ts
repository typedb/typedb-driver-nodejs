interface Type extends Concept {
    asThingType(): ThingType;
    asEntityType(): EntityType;
    asAttributeType(): AttributeType;
    asRelationType(): RelationType;
    asRoleType(): RoleType;

    getLabel(): string;
    isRoot(): boolean;
}