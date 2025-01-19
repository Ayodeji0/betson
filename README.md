// This is an assesment task from betson to perform at least two test on https://www.saucedemo.com

//THE PROGRAMMING LANGUAGE USED
Playwright with typescript was used to write this test and page object model(POM) was adopted
i created a folder name bestson nd installed playwright: using npm init playwright@latest
then i created a folder to store all my test named bestonui and used this as the testDir i.e test directory on the typscriptconfig file
i performed the two test on the login functionality and inventory
i created a page model for both the login and inventory which i named LoginPage and InventoryPage respectively
Then i went further to create a test file to run the test, i used index file to store all pages do as to avoid repetiton of imports
i perform three test cases for the login page one positive test and two negative tests respectively which the three test passed
Then i went further to perform three test for inventory as well in total 6 test ran and passed successully.


// API TESTING
 Another file named apitest is where the api is been tested the endpoint is :https://petstore.swagger.io/v2
 This endpoint is stored in a variable called BASEURL and ran test using both POST and GET method 
 On each of the method i performed both negative and positive test on each method getting 200 and 500 response code for the post 
 on the POST methode the data were recovered using post method and got 200 response message this is for the postive test while i got 404 response for
 the negative test performed on the same GET method in a nutshell both the GET and the POST test ran and both passed.
