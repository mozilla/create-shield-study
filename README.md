# Create Shield Study Tool

## IMPORTANT - WARNING

This is raw and experimental, and NOT YET READY for production. 

DO NOT USE, EXCEPT TO EVALUATE.

## Usage

### from `npm init`   (soon, not yet working)

`npm init shield-study feature-name`

Creates a folder `feature-name` for the addon.

### Interactive question wizard:

`npm init shield-study`

### Local usage (dev version)

```
git clone create-shield-study && cd $_
create-shield-study
```


## Working with your addon

```
cd feature-name
npm install

## commands
npm run test
npm run lint
npm run help
```

## Created WebExtension Experiment Folder Contents

```
feature-name/
├── LICENSE
├── README.md
├── docs
│   ├── DEV.md
│   ├── TELEMETRY.md
│   ├── TESTPLAN.md
│   └── WINDOWS_SETUP.md
├── karma.conf.js
├── package-lock.json
├── package.json
├── src
│   ├── _locales
│   │   ├── en-US
│   │   │   └── messages.json
│   ├── background.js
│   ├── feature.js
│   ├── icons
│   │   ├── LICENSE
│   │   └── shield-icon.svg
│   ├── manifest.json
│   ├── privileged
│   │   ├── introductionNotificationBar
│   │   │   ├── api.js
│   │   │   └── schema.json
│   │   └── testingOverrides
│   │       ├── api.js
│   │       ├── api.md
│   │       ├── schema.json
│   │       ├── schema.yaml
│   │       └── stubApi.js
│   └── studySetup.js
├── test
│   ├── ensure_minimum_node_version.js
│   ├── functional
│   │   ├── 0-study_utils_integration.js
│   │   ├── 1-button_test.js
│   │   ├── 2-notification_bar.js
│   │   └── utils.js
│   └── unit
│       └── feature.spec.js
└── web-ext-config.js
```

