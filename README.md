# primaryBid

The project was created using cypress.io automation tool and IDE used was visual studio code. 
The language used was Javascript.
After clonning the repository, install the required dependencies: Node.js, Cypress, Mocha, Mochawesome.

The cypress folder contains Fixture folder, Integration folder, and I created a pageObject folder.
Fixtures folder contian testData.json where I have all the test data used in the script and datahelper.js used in the generation of random email address.
Integration folder contains the primaryBid test suites which contains the test cases for the script.
PageObject folder is the repository for all the elements and their locators for all the pages interracted with during the automation.
Mochawesome-report folder contains the test report in html format.
Videos folder contains the video of the test when it was ran headless. No video recording during the headed run of the test script.

Use cyOpen at the terminal to run in headed mode, cyRun in headless mode and mochawesomeReport to run in heedless mode and get mochawesome report stored in the mochawesome-report folder. Copy the link mochawesome.html and view in the browser.

Observations around the user experience(UX).

During the sign up process the user should be informed that the email is not valid when it's being typed into the email text field. Allowing the user to complete filling the form, submit it and then show the error message have a negative impact on the performance. The same scenario occured when the passwords entered were not matching.

When a user logged in, no information on the user that logged in on the navigational bar. it only show Profile.

Using an arrow to scroll at the right/left end of the scrolling image on the "about us page" section "how it works" would improve the user experience compare to clicking the tiny page icon below the scrolling images.
