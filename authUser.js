// 1. Import the users array from data.json
// 2. Create and export a function
// 3. Provide the three parameters that middleware can utilize
// 4-a. Check if the request object has a query named username
//     4-b. If not, redirect the response to the forbidden route
// 5-a. Check if the username query is equal to any of the users' name properties
//     HINT: toLowerCase()
//     5-b. If it does, create a currentUser property on the request object
//          and set it equal to the user's name value, then call the next
//          middleware function in the stack
//     5-c. If it does not, set the response's status to 401 and
//          send a string asking for a username.
