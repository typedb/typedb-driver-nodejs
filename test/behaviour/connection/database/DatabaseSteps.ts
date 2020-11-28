import { Given, When, Then } from "@cucumber/cucumber";
import { client } from "../ConnectionSteps"

When("connection create database(s):", () => {
    console.log("This does nothing");
});

When("connection create database: {word}", (name: string) => {
    connection_create_databases([name]);
});

When("connection create database(s):", (names: string[]) => {
    connection_create_databases(names);
});

function connection_create_databases(names: string[]) {
    names.forEach((name:string) => client.databases().create(name));
}

// @When("connection create databases in parallel:")
// public void connection_create_databases_in_parallel(List<String> names) {
//     assertTrue(THREAD_POOL_SIZE >= names.size());
//
//     CompletableFuture[] creations = names.stream()
//         .map(name -> CompletableFuture.runAsync(() -> client.databases().create(name), threadPool))
//         .toArray(CompletableFuture[]::new);
//
//     CompletableFuture.allOf(creations).join();
// }
//
// @When("connection delete database(s):")
// public void connection_delete_databases(List<String> names) {
//     for (String databaseName : names) {
//         client.databases().delete(databaseName);
//     }
// }
//
// @Then("connection delete database(s); throws exception")
// public void connection_delete_databases_throws_exception(List<String> names) {
//     for (String databaseName : names) {
//         try {
//             client.databases().delete(databaseName);
//             fail();
//         } catch (Exception e) {
//             // successfully failed
//         }
//     }
// }
//
// @When("connection delete databases in parallel:")
// public void connection_delete_databases_in_parallel(List<String> names) {
//     assertTrue(THREAD_POOL_SIZE >= names.size());
//
//     CompletableFuture[] deletions = names.stream()
//         .map(name -> CompletableFuture.runAsync(() -> client.databases().delete(name), threadPool))
//         .toArray(CompletableFuture[]::new);
//
//     CompletableFuture.allOf(deletions).join();
// }
//
// @Then("connection has database(s):")
// public void connection_has_databases(List<String> names) {
//     assertEquals(set(names), set(client.databases().all()));
// }
//
// @Then("connection does not have database(s):")
// public void connection_does_not_have_databases(List<String> names) {
//     Set<String> databases = set(client.databases().all());
//     for (String databaseName : names) {
//         assertFalse(databases.contains(databaseName));
//     }
// }