# Download jq
curl -L https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 -o ./jq 

# Make jq executable
chmod a+x ./jq 

# Get version from package.json
VERSION=$(node --eval="process.stdout.write(require('./package.json').version)") 

# Get the current import-map.json
aws s3 cp s3://mfe-stage-pass/config/import-map.json ./import-map.json

# Update the import-map.json
NEW_URL=/config/mfe/app-events/$VERSION/stagepass-app-events.js

# Update the import-map.json
cat ./import-map.json | ./jq --arg NEW_URL "$NEW_URL" '.imports["@stagepass/app-events"] = $NEW_URL' > new.importmap.json

# Upload the new import-map.json
aws s3 cp dist s3://mfe-stage-pass/config/mfe/app-events/$VERSION --recursive
aws s3 cp new.importmap.json s3://mfe-stage-pass/config/import-map.json
