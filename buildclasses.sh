#!/usr/bin/env bash
mkdir -p $1;
cd $1
for var in ${@:2}
do

if [ -f $1/$var.js ]; then
        echo "$var.js already exists. Skipping..."
else
echo "Creating $var.js"
cat > $var.js <<EOL
class $var {
    constructor() {

    }
}

module.exports = $var;
EOL
fi
done
