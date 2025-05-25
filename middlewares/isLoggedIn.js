// Creating LoggedIn middleware to check if the user is logged in.

const jwt = require('jsonwebtoken');
const { userModel } = require('../models/user.models');


module.exports.isLoggedIn = async function (req, res, next) {
    try {
        // Extracting token from cookies.

        const token = req.cookies.token;

        // If token is not present, return unauthorized.

        if (!token) {
            return res.status(401).send('Unauthorized: No token provided');
            return res.redirect('/users/login');
        }

        // Verify the token.

        const decoded = jwt.verify(token, process.env.JWT_KEY);

        // Find the user by ID from the decoded token.

        const user = await userModel.findById(decoded.id).select('-password'); 
        // Exclude password from the user object.
        
        // If user is not found, return unauthorized, If user does not exist, return unauthorized.


        if (!user) {
            return res.status(401).send('Unauthorized: User not found');
        }

        // Attach user to request object for further use in routes.

        req.user = user;
        
        // Proceed to the next middleware or route handler.

        next();

    }
    catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }

}
// Note: Ensure that you have set the JWT_SECRET in your environment variables.
// This middleware can be used in routes to protect them and ensure that only logged-in users can access them.