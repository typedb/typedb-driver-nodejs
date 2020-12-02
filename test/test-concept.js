/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const { GraknClient } = require("../dist/rpc/GraknClient");
const { Grakn } = require("../dist/Grakn");
const { AttributeType } = require("../dist/concept/type/AttributeType");
const { SessionType, TransactionType } = Grakn;

async function run() {
    const client = new GraknClient();

    try {
        const names = await client.databases().all();
        console.log(`get databases - SUCCESS - the databases are [${names}]`);
        if (names.includes("grakn")) {
            await client.databases().delete("grakn");
            console.log(`delete database - SUCCESS - 'grakn' has been deleted`);
        }
        await client.databases().create("grakn");
        console.log("create database - SUCCESS - 'grakn' has been created");
    } catch (err) {
        console.error(`database operations - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    let session;
    try {
        session = await client.session("grakn", SessionType.SCHEMA);
        console.log("open schema session - SUCCESS");
    } catch (err) {
        console.error(`open schema session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    let tx;
    try {
        tx = await session.transaction(TransactionType.WRITE);
        console.log("open schema write tx - SUCCESS");
    } catch (err) {
        console.error(`open schema write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    let lion, lionFamily, lionCub, maneSize;
    try {
        lion = await tx.concepts().putEntityType("lion");
        console.log("put entity type - SUCCESS");
    } catch (err) {
        console.error(`put entity type - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.commit();
        console.log("commit schema write tx - SUCCESS");
    } catch (err) {
        console.error(`commit schema write tx - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.close();
        console.log("close schema write tx - SUCCESS");
    } catch (err) {
        console.error(`close schema write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.WRITE);
        lionFamily = await tx.concepts().putRelationType("lion-family");
        await lionFamily.asRemote(tx).setRelates("lion-cub");
        lionCub = await lionFamily.asRemote(tx).getRelates().collect().then(roles => roles[0]);
        await lion.asRemote(tx).setPlays(lionCub);
        await tx.commit();
        await tx.close();
        console.log("commit relation type, relates and plays - SUCCESS");
    } catch (err) {
        console.error(`commit relation type, relates and plays - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.WRITE);
        maneSize = await tx.concepts().putAttributeType("mane-size", AttributeType.ValueType.LONG);
        await lion.asRemote(tx).setOwns(maneSize);
        await tx.commit();
        await tx.close();
        console.log("commit attribute type + owns - SUCCESS");
    } catch (err) {
        console.error(`commit attribute type + owns - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    let stoneLion;
    try {
        tx = await session.transaction(TransactionType.WRITE);
        stoneLion = await tx.concepts().putEntityType("stone-lion");
        await stoneLion.asRemote(tx).setSupertype(lion);
        await tx.commit();
        await tx.close();
        console.log("set supertype - SUCCESS");
    } catch (err) {
        console.error(`set supertype - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.READ);
        const supertypeOfLion = await lion.asRemote(tx).getSupertype();
        await tx.close();
        console.log(`get supertype - SUCCESS - the supertype of 'lion' is '${supertypeOfLion.getLabel()}'.`);
    } catch (err) {
        console.error(`get supertype - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.READ);
        const supertypesOfStoneLion = await stoneLion.asRemote(tx).getSupertypes().collect();
        await tx.close();
        console.log(`get supertypes - SUCCESS - the supertypes of 'stone-lion' are [${supertypesOfStoneLion.map(x => x.getLabel())}].`);
    } catch (err) {
        console.error(`get supertypes - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.READ);
        const subtypesOfLion = await lion.asRemote(tx).getSubtypes().collect();
        await tx.close();
        console.log(`get subtypes - SUCCESS - the subtypes of 'lion' are [${subtypesOfLion.map(x => x.getLabel())}].`);
    } catch (err) {
        console.error(`get subtypes - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.WRITE);
        const monkey = await tx.concepts().putEntityType("monkey");
        await monkey.asRemote(tx).setLabel("orangutan");
        const newLabel = await tx.concepts().getEntityType("orangutan").then(entityType => entityType.getLabel());
        await tx.rollback();
        await tx.close();
        console.log(`set label - SUCCESS - 'monkey' has been renamed to '${newLabel}'.`);
    } catch (err) {
        console.error(`set label - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.WRITE);
        const whale = await tx.concepts().putEntityType("whale");
        await whale.asRemote(tx).setAbstract();
        const isAbstractAfterSet = await whale.asRemote(tx).isAbstract();
        console.log(`set abstract - SUCCESS - 'whale' ${isAbstractAfterSet ? "is" : "is not"} abstract.`);
        await whale.asRemote(tx).unsetAbstract();
        const isAbstractAfterUnset = await whale.asRemote(tx).isAbstract();
        await tx.rollback();
        await tx.close();
        console.log(`unset abstract - SUCCESS - 'whale' ${isAbstractAfterUnset ? "is still" : "is no longer"} abstract.`);
    } catch (err) {
        console.error(`set label - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    let parentship, fathership, person, man, parent, father;
    try {
        tx = await session.transaction(TransactionType.WRITE);
        parentship = await tx.concepts().putRelationType("parentship");
        await parentship.asRemote(tx).setRelates("parent");
        fathership = await tx.concepts().putRelationType("fathership");
        await fathership.asRemote(tx).setSupertype(parentship);
        await fathership.asRemote(tx).setRelates("father", "parent");
        person = await tx.concepts().putEntityType("person");
        parent = await parentship.asRemote(tx).getRelates("parent");
        await person.asRemote(tx).setPlays(parent);
        man = await tx.concepts().putEntityType("man");
        await man.asRemote(tx).setSupertype(person);
        father = await fathership.asRemote(tx).getRelates("father");
        await man.asRemote(tx).setPlays(father, parent);
        const playingRoles = await man.asRemote(tx).getPlays().collect();
        await tx.commit();
        await tx.close();
        console.log(`get/set relates/plays, overriding a super-role - SUCCESS - 'man' plays [${playingRoles.map(role => role.getScopedLabel())}].`);
    } catch (err) {
        console.error(`get/set relates/plays, overriding a super-role - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    let email, workEmail, customer, age;
    try {
        tx = await session.transaction(TransactionType.WRITE);
        email = await tx.concepts().putAttributeType("email", AttributeType.ValueType.STRING);
        await email.asRemote(tx).setAbstract();
        workEmail = await tx.concepts().putAttributeType("work-email", AttributeType.ValueType.STRING);
        await workEmail.asRemote(tx).setSupertype(email);
        age = await tx.concepts().putAttributeType("age", AttributeType.ValueType.LONG);
        await person.asRemote(tx).setAbstract();
        await person.asRemote(tx).setOwns(email, true);
        await person.asRemote(tx).setOwns(age, false);
        customer = await tx.concepts().putEntityType("customer");
        await customer.asRemote(tx).setSupertype(person);
        await customer.asRemote(tx).setOwns(workEmail, true, email);
        const ownedAttributes = await customer.asRemote(tx).getOwns().collect();
        const ownedKeys = await customer.asRemote(tx).getOwns(true).collect();
        const ownedDateTimes = await customer.asRemote(tx).getOwns(AttributeType.ValueType.DATETIME, false).collect();
        await tx.commit();
        await tx.close();
        console.log(`get/set owns, overriding a super-attribute - SUCCESS - 'customer' owns [${ownedAttributes.map(x => x.getLabel())}], ` +
            `of which [${ownedKeys.map(x => x.getLabel())}] are keys, and [${ownedDateTimes.map((x => x.getLabel()))}] are datetimes`);
    } catch (err) {
        console.error(`get/set owns, overriding a super-attribute - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.WRITE);
        await person.asRemote(tx).unsetOwns(age);
        await person.asRemote(tx).unsetPlays(parent);
        await tx.rollback();
        await tx.close();
        console.log(`unset owns/plays - SUCCESS`);
    } catch (err) {
        console.error(`unset owns/plays - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await session.close();
        console.log("close schema session - SUCCESS");
    } catch (err) {
        console.error(`close schema session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    try {
        session = await client.session("grakn", SessionType.DATA);
        console.log("open data session - SUCCESS");
    } catch (err) {
        console.error(`open data session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.WRITE);
        console.log("open data write tx - SUCCESS");
    } catch (err) {
        console.error(`open data write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    try {
        for (let i = 0; i < 10; i++) lion.asRemote(tx).create();
        console.log("create 10 lions - SUCCESS");
    } catch (err) {
        console.error(`create 10 lions - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        lion = lion.asRemote(tx);
        const lionsStream = lion.getInstances();
        const lions = await lionsStream.collect();
        console.log(`getInstances - SUCCESS - There are ${lions.length} lions.`);
    } catch (err) {
        console.error(`getInstances - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.commit();
        console.log("commit data write tx - SUCCESS");
    } catch (err) {
        console.error(`commit data write tx - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.close();
        console.log("close data write tx - SUCCESS");
    } catch (err) {
        console.error(`close data write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    try {
        await session.close();
        console.log("close data session - SUCCESS");
    } catch (err) {
        console.error(`close data session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    try {
        client.close();
        console.log("client.close - SUCCESS");
    } catch (err) {
        console.error(`client.close - ERROR: ${err.stack || err}`);
        return;
    }
}

run();
