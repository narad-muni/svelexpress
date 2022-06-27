 # Svelexpress

#### Boilerplate project for developing svelte and express, without running them on seperate ports.

There are 2 Main folders which only needs to be interfered with.  
**client** - This folder contains svelte default file  
**server** - this folder contains a server.js file and api folder.  

#### How to get started.  
```bash
git clone https://github.com/narad-muni/svelexpress
cd svelexpress
npm install
```
#### For Development
```bash
npm run dev
```
This command will enable hotreloading for both svelte and express server.

#### For Deployement
```bash
npm run deploy
```
This command is used for deployement.This will only run express server.  

**The app is available on port 5000. It only runs on single port.**  

Following code contains example of controller,middleware and route.  
This setup is supposed to be used with svelte-spa-router.  
  
That's all about it.You can just go through code to understand further.