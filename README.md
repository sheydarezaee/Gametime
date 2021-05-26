# yelp-point
A minimal Yelp client made in React Native which leverages the Yelp GraphQL API

## Utilized

- node 16.x.x
- npm 7.x.x
- XCode 12.4
- Android SDK 29
- JAVA 1.8

## Install and Run

In order to setup the project and it's dependencies, run npm install in the root directory of the project `/PROJECT`

After installing the dependencies, run the following commands depending on the platform you want to run.

### Android

For running the Android project run the following command in the root directory of the project `/PROJECT`.

**NOTE:** It is necessary to have one instance of an android virtual device already running or an Android device with USB Debugging activated plugged into the computer.

```bash
  $ npx react-native run-android
```

### iOS

For running the iOS project it is necessary to open the XCode project and launch the simulator from it.

Follow next steps:

######if you cocoapods is not installed install it!!:

```bash
	$ gem install cocoapods
```

1- Open a terminal and navigate to the project folder:

```bash
npm install
```

```bash
cd ios && pod install
```

2- From xCode:

- Open Project.xcworkspace file
- Select Project 
- Select simulator (iPhone X, iPhone XR, ...)
- Click Run

### Metro

The metro builder can be started running the following command in the root directory of the project `/PROJECT`

**NOTE**: This is only recommended in case that you already have run one of the previous commands for iOS or Android and you want to restart the metro builder.

```bash
	$ react-native start
```

## Clean

For cleaning the project run the following commands

### iOS

```bash
	$ cd ios && xcodebuild clean
```

### Android

```bash
	$ cd android && ./gradlew clean
```

or

```bash
	$ cd android && sudo -E ./gradlew clean
```

## Debugging

React Native has an in app menu that allows the developer to toggle the remote JS debugger. This menu can be opened either shaking the device or through the following shortcuts:

#### iOS

- Toggle Menu: `cmd/ctrl + d`
- Reload: `cmd/ctrl + r`

#### Android

- Toggle Menu: `cmd/ctrl + m`
- Reload: `r + r`

### DevTools

It is recommended to install React's dev tools. This extension it's available either for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) or [Mozilla](https://addons.mozilla.org/es/firefox/addon/react-devtools/), and get Apollo Client Devtools on Chrome extension.

## Logs

All console.log's of the iOS or Android app can be displayed using one of the following commands.

#### iOS

```bash
	$ react-native log-ios
```

### Android

```bash
	$ react-native log-android
```

## search queries with graphQl Yelp API


**Example:**

``` javascript
const GET_ITEMS = gql`
    query Items($term: String!, $location: String!) {
      items (
        term: $term,
        location: $location,
        limit: 10) {
        business {
          name
          rating
          review_count
          location {
            address1
            city
            state
            country
          }
        }
      }
    }
  `
  const { loading, data } = useQuery(GET_ITEMS, {
    variables: { term, location },
  })
```

## Technology stack

The following packages compose the technology stack of the project:

- react-native
- react-navigation
- graphQl
- apollo