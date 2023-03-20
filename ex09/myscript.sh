absolute=$(cd $(dirname "$0") && pwd)
scriptName=$(basename $absolute)
relative=`dirname $0`

echo "scriptName: $scriptName"
echo "Relative Path: $relative"
echo "Absolute Path: $absolute"
