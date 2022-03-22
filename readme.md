
 - make Procfile 
 ```js
 web: npm start
 ```

 - heroku local web


```js
echo "node_modules" >> .gitignore
```

# problem
 - setup heroku account
 - install heroku cli
 - setup an application for node
 - setup start scripts
 - setup Procfile
 - add node_modules to gitignore
 - run heroku locally
 - setup a port process.env.port
 - create heroku application
 - commit changes
 - push to heroku master => triggers your backend build

# problem 2

 - can we do some automation
 - can be done for frontend builds also  => not just backend
 - CI / CO => continious integration / continious deployment
 - yml => yaml => yet another markup language => yaml aint markup language

- create a github project
- create a .yml workflow inside .github/workflows
- use the heroku marketplace action for github
- add your github secrets
- correctly enter info in your .yml files
- commit, add push to whichever branch you added on your yml
- see the update on your web application