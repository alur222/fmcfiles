# fmcfiles

## Steps
- Create an `.env` file at project root with this vars:
```
STAFF_USERNAME=iamstaff
STAFF_PASSWORD=staff1234
STAFF_EMAIL=staff@fmcfiles.com
STAFF_NAME=Staff Role
MANAGER_USERNAME=admin
MANAGER_PASSWORD=manager1234
MANAGER_EMAIL=manager@fmcfiles.com
MANAGER_NAME=Manager Name
```

- initialize env vars
` export $(cat .env | xargs); `

- run the app
`meteor npm start `
