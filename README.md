# react-alert-system

Simple library that manages alerts using reactJS. It provides a default ui for the alerts but you can customize it by defining a custom component.

[![latest version](https://img.shields.io/npm/v/react-alert-system?color=success)](https://www.npmjs.com/package/react-alert-system)
[![size](https://img.shields.io/bundlephobia/min/react-alert-system?color=green)](https://www.npmjs.com/package/react-alert-system)
[![reactjs](https://img.shields.io/github/package-json/dependency-version/adriamarzo/react-alert-system/dev/react)](https://github.com/facebook/react)
[![styled-components](https://img.shields.io/github/package-json/dependency-version/adriamarzo/react-alert-system/dev/styled-components)](https://github.com/styled-components/styled-components)
[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Installation

1. Install it by running `npm i --save react-alert-system` or `yarn add react-alert-system`

# Docs

The library uses Javascript custom events, React Portals and React's hooks.

### 1. Instantiate the Alert Manager component

This library provides a specific component named `AlertManager`. This component is the responsible to get the existing DOM element, or create it in case it does not exist, from where the alert elements will be rendered.
It is ready to receive the following properties:

| Prop           | Type                                         | Description                                                                                               |
| -------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| portalId       | String                                       | The id of the DOM element to use as a root element of the alerts                                          |
| position       | `AlertPosition`<br>(`BottomLeft` by default) | The screen position of the alerts                                                                         |
| maxAlerts      | Number<br>(`15` by default)                  | Maximum number of alerts to be rendered                                                                   |
| AlertComponent | React Component                              | Custom component that will represent the UI of the alert (if it is not defined it will use a default one) |
| zIndex         | Number<br>(`1` by default)                   | Customize the z-order of the alerts to overlap the rest of the elements.                                  |

### 2. Handling alerts

You can create an alert from the `AlertsEventHandler` class provided. It has some static methods allowing you to perform the following actions:

#### add (creates an alert):

| Parameters | Type   | Description                                                |
| ---------- | ------ | ---------------------------------------------------------- |
| `alert`    | Alert  | Alert properties                                           |
| `payload`  | Object | Any custom property passed directly to the alert component |

#### remove (removes an existing alert):

| Parameters | Type   | Description             |
| ---------- | ------ | ----------------------- |
| id         | Number | Identifier of the alert |

# Types

#### AlertType:

| Type | Description                             |
| ---- | --------------------------------------- |
| enum | [`Success`, `Error`, `Warning`, `Info`] |

#### AlertPosition:

| Type | Description                                          |
| ---- | ---------------------------------------------------- |
| enum | [`BottomLeft`, `BottomRight`, `TopLeft`, `TopRight`] |

#### Alert:

| Field               | Type                                | Description                                                             |
| ------------------- | ----------------------------------- | ----------------------------------------------------------------------- |
| `id`                | string                              | Identifier of the alert                                                 |
| `duration`          | Number                              | How much time will be displayed the alert<br>(`5000` by default)        |
| `preventDuplicated` | Boolean                             | Allow adding alerts with the same `id`<br>(`false` by default)          |
| `type`              | `AlertType` <br>(`Info` by default) | Defines the type of the alert, it will be passed to the alert component |

# Example:

```js
import {
  AlertManager,
  AlertPosition,
  AlertType,
  AlertsEventHandler,
} from "react-alert-system";
import CustomAlert from "../components/custom-alert";

const Component = () => {
  useEffect(() => {
    AlertsEventHandler.add(
      {
        id: "id",
        preventDuplicated: false,
        duration: 5000,
        type: AlertType.Warning,
      },
      {
        title: "Title example",
        description: "Description of the example",
      }
    );
  }, []);

  return (
    <div>
      <p>This is an example</p>
      <AlertManager
        portalId="alerts-portal"
        maxAlerts={4}
        position={AlertPosition.TopLeft}
        AlertComponent={CustomAlert}
      />
    </div>
  );
};
```
