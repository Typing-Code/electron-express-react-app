# electron-express-react-app

## Install
git clone https://github.com/Dreamsmakers/electron-express-react-app.git
cd electron-express-react-app
npm install

## Developing
In the development process, in order not to be recompiling every time a change is made in the react components, a terminal must be opened where you execute the following command:<br>
<b>npm run watch</b><br>
this command compiles these react components and watches the files for when there is a change to compile it again without having to do it manually.
Then in another terminal you execute the <br>
<b>npm start</b> <br>
command that finally starts the application.

## Compile
Linux app<br>
<b>npm run package-linux</b>

Windows app<br>
<b>npm run package-win</b>

Note: If you compile the app for windows from a linux system make sure to install wine 