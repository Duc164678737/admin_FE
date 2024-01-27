# Admin Page for Dimetime project

## 1. Description

Admin for Dimetime DApp build with Reactjs
## 2. Prerequisite
- Install nodejs (v16)
- Install yarn
## 3. Installation

```bash
$ yarn install
```

## 4. Setup environment

### 4.1. Create a dotenv file from .env.template by:

```bash
$ cp .env.example .env
```
### 4.2. Fill contract address by following key
```bash
# Contract setting
# Box contract address
REACT_APP_ADDRESS_BOX=
# INORound contract address
REACT_APP_INO_ROUND=
# INOManager contract address
REACT_APP_ADDRESS_INO_MANAGER=
# OpenBox contract address
REACT_APP_ADDRESS_INO_OPEN_BOX=
```
## 5. Build & Run

```bash
# Build
$ yarn build

# start 
$ yarn dev
```