import { mkdirSync, existsSync, constants, readdirSync, lstatSync, unlinkSync, rmdirSync } from "fs";
import { execSync } from "child_process";
import Path from "path";
const TAR = ".tar.gz";
const ZIP = ".zip";


function recursivelyDeleteDirectory(directory: string): void {
    if (existsSync(directory)) {
        readdirSync(directory).forEach((file: string, index: number) => {
            const curPath = Path.join(directory, file);
            if (lstatSync(curPath).isDirectory()) {
                recursivelyDeleteDirectory(curPath);
            } else {
                unlinkSync(curPath);
            }
        });
        rmdirSync(directory);
    }
}

function checkAndDeleteExistingDistribution(distributionFile: string): void {
    let target = distributionTarget(distributionFile);
    console.error("Checking for existing Grakn distribution at " + target);

    if (existsSync(target)) {
        console.error("There exists a Grakn Core distribution and will be deleted");
        recursivelyDeleteDirectory(target);
        console.error("Existing Grakn Core distribution deleted");
    } else {
        console.error("There is no existing Grakn Core distribution");
    }
}

function distributionTarget(distributionFile: string): string {
    let format = distributionFormat(distributionFile);
    return distributionFile.substring(0, distributionFile.length - format.length);
}



function distributionFormat(distributionFile: string): string {
    if (distributionFile.endsWith(TAR)) {
        return TAR;
    } else if (distributionFile.toString().endsWith(ZIP)) {
        return ZIP;
    } else {
        throw "Distribution file format should either be " + TAR + " or " + ZIP;
    }
}

function unzip(file_to_unzip: string, directory: string, format: string): void {
    console.error("Unarchiving Grakn Core distribution");
    if (format === TAR) {
        execSync("tar -xf " + file_to_unzip + " -C " + Path.dirname(directory), {stdio: 'inherit'});
    } else {
        execSync("unzip -q " + file_to_unzip + " -d " + Path.dirname(directory), {stdio: 'inherit'});
    }

    console.error("Grakn Core distribution unarchived");
}

function start_grakn(distribution_file_name: string, port: number): string {
    console.error("Constructing a Grakn Core runner on port " + port.toString());
    if (!existsSync(distribution_file_name)) {
        throw "Distribution file " + distribution_file_name + " not accessible."
    }
    checkAndDeleteExistingDistribution(distribution_file_name);

    let GRAKN_DISTRIBUTION_FILE = distribution_file_name;
    let GRAKN_DISTRIBUTION_FORMAT = distributionFormat(distribution_file_name);
    let GRAKN_TARGET_DIRECTORY = distributionTarget(distribution_file_name);

    let tmpDir = GRAKN_TARGET_DIRECTORY + "/grakn_core_test";

    unzip(GRAKN_DISTRIBUTION_FILE, GRAKN_TARGET_DIRECTORY, GRAKN_DISTRIBUTION_FORMAT);
    mkdirSync(tmpDir);

    console.error("Starting Grakn Core database server at " + GRAKN_TARGET_DIRECTORY);
    console.error("Database directory will be at " + tmpDir);
    execSync(GRAKN_TARGET_DIRECTORY + "/grakn server --port " + port.toString() + " --data grakn_core_test", {stdio: 'inherit'});
    console.error("Grakn Core database server started");
    return "127.0.0.1:" + port.toString();
}

function stop_grakn(distribution_file_name: string, port: number): void {
    //TODO: KILL GRAKN
}


function main() {
    let [func, ...args] = process.argv.slice(2);
    switch (func) {
        case "start":
            return start_grakn(args[0], parseInt(args[1]));
        case "stop":
            stop_grakn(args[0], parseInt(args[1]));
            return "";
        case "help":
        default:
            console.error("Help to follow once I have a better idea what's going on.");
            break
    }
}

main();