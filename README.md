## Steps to make it run:

1) Download the project
2) Open the directory in any code editor
3) Edit the config.env file and paste the mongodb connection String in variable "DB_CONNECTION_STRING"
4) Run npm install , this will install all the required dependencies
5) Now run npm start
6) Go to http://localhost:5000





# 1. How would you test this service?
Answer: Web API that shortens the URL, can be tested using tools like Postman. We can write the test cases depending on the functionality of the service.
Javascript methods can be tested using tools like jest. 
Manual testing can be done with the UI where one can test with different inpputs in different scenarios.

# 2. What DB models would need to change to support multiple users?
Answer: Currently I am just using "shortURL" model. To support multiple users we can have a "users" model with fields like id, name, email, password, createdAt, modifiedOn
etc. and we can connect "users" and "shortURL".
"shortURL model": ObjectId, userId(reference to: user), shortId, longURL, createdOn
"user model": ObjectId/userId, name, email, password, confirmPassword, createdAt, modifiedAt

# 3. How can this service support 1000 concurrent requests?
Answer: Due to Node having non I/O blocking and event driven model and if there are no heavy calculations in the code, node can pretty much handle these concurrent requests.
In addition packages like cluster and PM2 can be user that enables multiple processes running for the same application and also for load balancing. And code must be asynchronous.
Data caching can also be used to increase the performance.

# 4. What kind of database models do you think would cause an issue? And why?
Answer: as mongodb supports embedded documents, designing the models unappropriately can cause major issues at later stage like 
user model having field shorURLs: [](array of urls) that contains the list of all the urls user have converted, chances are there that as user will keep on adding stuff or converting urls
the size of the document will keep on increasing. So one has to define relations between the models very carefully.

# 5. Which parts of the service do you think are most likely to fail? And why?
Answer: duplication is the main issue here, as the number of users increases there are chances that shortId/shortURL generated may not be unique and that has to be handled carefully.

