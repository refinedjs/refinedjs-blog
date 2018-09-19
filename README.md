## Running

### Setup

1. In a command window, cd to root folder of this project and ensure dependencies are installed

    ```
    yarn install
    ```

2. Create a new file named .env and add the content from the file named .env.example


2. Run the environment build to watch app files

    ```
    yarn run devBuild
    ```

3. In a second command window (launched from root folder) run the server

    ```
    yarn run start
    ```

4. To run on a specific port you can specify the port before starting the server

    ```
    PORT=3006 yarn run start
    ```

You can then view the demo application in a browser at localhost:3000.


### Changelog

__0.1.0__

- Initial release


### License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).