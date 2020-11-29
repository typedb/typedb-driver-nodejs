FILE=$1
PORT=$((40000 + (RANDOM % 20000)))
PORT=1729
echo $FILE
node ./test/GraknCoreRunner.js start $FILE $PORT &
#sleep 10
node ./node_modules/.bin/cucumber-js ./external/graknlabs_behaviour/**/*.feature --require-module ts-node/register --require-module @babel/register --require './test/babel-typescript-register.js' --require './**/*.ts'
result=$?
node ./test/GraknCoreRunner.js stop $FILE $PORT
exit $result