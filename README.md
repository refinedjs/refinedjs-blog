## Running

### Setup

1. In a command window, cd to root folder of this project and ensure dependencies are installed

    ```
    yarn install
    ```

2. Create a new file named .env and add the content from the file named .env.example


3. Run the environment build to watch app files

    ```
    yarn run devBuild
    ```

4. In a second command window (launched from root folder) run the server

    ```
    yarn run start
    ```

5. To run on a specific port you can specify the port before starting the server

    ```
    PORT=3006 yarn run start
    ```

6. On a local mongo instance, seed the database. This will drop the products collection if it exists and re-import the products.

    ```
    mongoimport --host 127.0.0.1 --port 27017 --db refinedjs --collection posts --drop --file server/data/posts/posts.json --jsonArray
    ```

To run using Docker, make sure you have [docker](https://www.docker.com/get-started) installed, run the following commands

1. Start the containers

    ```
    docker-compose build
    docker-compose up -d
    ```

2. On a docker mongo instance, seed the database. This will drop the products collection if it exists and re-import the products.

    ```
    mongoimport --host 127.0.0.1 --port 27017 --db refinedjs --collection posts --drop --file server/data/posts/posts.json --jsonArray
    ```

You can then view the demo application in a browser at localhost:3000.


### Changelog

__0.1.0__

- Initial release


### License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).