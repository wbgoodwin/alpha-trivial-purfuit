# alpha-trivial-purfuit

## Getting Started
- If you do not already have it, go to https://nodejs.org/en/ and downlaod the LTS version of node. This install already includes npm as well.
- Clone this repo to your machine
- Open up a terminal and navigate to the /server directory for this project.
- Run `npm install`
- Once the install is finished run `npm start`
- Run `npm install` and `npm start` in a separate terminal for the /client directory as well.

If you are running Mac OS and get an error during npm install that says something like `gyp: No Xcode or CLT version detected!` then checkout these
links to resvolve the issue https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d or
https://anansewaa.com/gyp-no-xcode-or-clt-version-detected-macos-catalina/

- The app should be running on http://localhost:3000 in your browser.
- Use any text editor/IDE for editing the code. I use [VScode](https://code.visualstudio.com) and like it

### Start up services using Docker Compose
- If you do not have Docker installed you can download it [here](https://www.docker.com/get-started)
- Run the following command to start up all Docker services:
```
docker-compose up
```

### Run backend tests using Docker Compose
- If you do not have Docker installed you can download it [here](https://www.docker.com/get-started)
- Run the following command:
```
docker-compose -f docker-compose.test.yml up
```

### Mysql set-up help
The following is how I (Will) set up my mysql db
- I used Docker. If you do not have docker installed you can install it [here](https://www.docker.com/get-started)
- I also used mysql workbench. Download can be found [here](https://www.mysql.com/products/workbench/)
- Run the following command:
```
docker run --name alphadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```
This creates a db in a container named alphadb that is published to port 3306.
- To start the db container run `docker start alphadb`. To stop run `docker stop alphadb`. Same with restart. To remove the container run `docker rm alphadb`.

- Go to mysql workbench and connect to the db instance
-  Only needed if you are running version >=8 I think. The npm package we are using in our app is using an older way to validate passwords than the current mysql is. Run `ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root'; flush privileges;` in mysql workbench query executor for the trivial_purfuit_database. Check out [this](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server) to understand why.
- Use the alpha-trivial-purfuit/server/trivial_purfuit_database.sql file to import the database. This can be done from workbench by specifying the db before the rest of the script is run `USE trivial_purfuit_database`. It should also be imported automatically within the app
