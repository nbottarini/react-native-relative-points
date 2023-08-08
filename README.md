[![npm](https://img.shields.io/npm/v/@nbottarini/react-native-relative-points.svg)](https://www.npmjs.com/package/@nbottarini/react-native-relative-points)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/nbottarini/react-native-relative-points/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/nbottarini/react-native-relative-points/actions)

# React Native relative points
Utility function that eases your responsive design

## Installation

Npm:
```
$ npm install --save @nbottarini/react-native-relative-points
```

Yarn:
```
$ yarn add @nbottarini/react-native-relative-points
```

## Usage

```typescript jsx
// Create a function named rv with your design width (for example the width used in Figma)
export const rv = (value) => relativeValueToPoints(value, 1440)

// Use your function to convert design units to proportional device units (the design proportions will be kept)
const MyComponent = () => (
    <View style={{ paddingTop: rv(14) }} />    
)

```
