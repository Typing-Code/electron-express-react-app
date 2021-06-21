# electron-express-react-app

## Install
<b>git clone https://github.com/Typing-Code/electron-express-react-app.git</b><br>
<b>cd electron-express-react-app</b><br>
<b>npm install</b>

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

Mac OS app<br>
<b>npm run package-mac</b>

Note: If you compile the app for windows from a linux system make sure to install wine 

Once compiled, the application that is generated is stored in the <b>release-builds</b> directory of the root directory of the project.

# Utils
If your connection is through proxy this will be useful<br>
git through proxy<br>
<b>git config --global http.proxy http://user:password@proxyserver:port</b><br>

npm via proxy<br>
<b>npm config set proxy http://user:password@proxyserver:port</b><br>
<b>npm config set https-proxy http://user:password@proxyserver:port</b><br>

compile via proxy<br>
<b>npx cross-env ELECTRON_GET_USE_PROXY=true GLOBAL_AGENT_HTTPS_PROXY=http://user:password@proxyserver:port npm run package-win</b><br>