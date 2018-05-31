#!/bin/bash

#sed -E 's|../cred/prod/GoogleService-Info.plist|../cred/dev/GoogleService-Info.plist|g' ios/rayakuMobileApp.xcodeproj/project.pbxproj > project_new.pbxproj && mv project_new.pbxproj ios/rayakuMobileApp.xcodeproj/project.pbxproj
platform=$1
env=$2
echo "startup mobile app"
echo "platform=$platform"
echo "env=$env"
#cp cred/prod/
#ENVFILE=.env.staging react-native run-ios ### pointing to docker testbed
environment="xx"

if [ "$env" == "production" ]
    then
        environment="prod"
    else
        environment="dev"
fi

config_db="cred/$environment/db.js"
config_google_service_ios="cred/$environment/GoogleService-Info.plist"
config_google_service_android="cred/$environment/google-services.json"

dest_file_db="App/"
dest_file_config="xx"
source_file_config="xx"

android_google_prod="cred/prod/google-services.json"
android_google_dev="cred/dev/google-services.json"
ios_google_prod="cred/prod/GoogleService-Info.plist"
ios_google_dev="cred/dev/GoogleService-Info.plist"

if ([ "$platform" == 'ios' ]) && ([ "$env" == 'development' ] || [ "$env" == 'staging' ] || [ "$env" == 'docker' ]); then
    source_file_config=$ios_google_dev
    dest_file_config="ios/"
elif [ "$platform" == 'ios' ] && [ "$env" == 'production' ]; then
    source_file_config=$ios_google_prod
    dest_file_config="ios/"
elif ([ "$platform" == 'android' ]) && ([ "$env" == 'development' ] || [ "$env" == 'staging' ] || [ "$env" == 'docker' ] || [ "$env" == 'development_device' ]); then
    source_file_config=$android_google_dev
    dest_file_config="android/app/"
elif [ "$platform" == 'android' ] && [ "$env" == 'production' ]; then
    source_file_config=$android_google_prod
    dest_file_config="android/app/"
fi

if [ "$source_file_config" == "xx" ] || [ "$dest_file_config" == "xx" ]; then
    echo "wrong environment or platform"
    exit 1
fi

echo "cp $source_file_config to $dest_file_config"
cp $source_file_config $dest_file_config
echo "cp $config_db $dest_file_db"
cp $config_db $dest_file_db 
echo "run ENVFILE=.env.$env react-native run-$platform"
ENVFILE=.env.$env react-native run-$platform
