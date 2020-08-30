# Playlists Generator

Web application to search songs and create playlists to save in your Spotify account.
To build this I used the [Spotify Api](https://developer.spotify.com/documentation/web-api/) and technologies like Express, React and Sass.
</br></br>

### Connect the Api to the Spotify account 
- Log in the [Spotify Dashboard](https://developer.spotify.com/dashboard/applications), and create an app
- Once in the app, in Edit Settings add `http://localhost:8888/auth` as **Redirect Uri**.

</br>

### Install the project

- Clone the repo and install all the dependencies.
```shell
git clone https://github.com/Mazelos/playlists-generator.git my-project
cd my-project
npm install
```
- In the main folder add the `.env` file and store the needed keys for Spotify Api (get them from the dashboard)
```shell
touch .env
echo CLIENT_ID=your_key >> .env
echo SECRET_ID=your_key >> .env
```

</br>

### Start the project 

- Start the server and the client in development mode

```shell
npm start
```

</br>

### Build the project 

You need to add a production Webpack configuration for this and deploy the server somewhere.

```shell
npm run build
```
