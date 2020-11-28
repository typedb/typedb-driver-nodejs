PORT=$((40000 + (RANDOM % 20000)))
node --trace-uncaught ./test/GraknCoreRunner.js start $1 $PORT &
sleep 10
node ./node_modules/.bin/cucumber-js ./external/graknlabs_behaviour/**/*.feature -require-module ts-node/register --require './**/*.ts'
result=$?
node --trace-uncaught ./test/GraknCoreRunner.js stop
exit $result