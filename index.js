const { AuthorizationManager } = require("./AuthorizationManager");
const { Roles } = require("./Roles");

const user = {
    id: "abcd",
    account: "abcd1234",
    name: "John",
    email: "joe@test.com",
    role: "User",
};

try {
    new AuthorizationManager(user).anyOf([Roles.ADMIN, "Manager"]);

    console.log("Continue the execution...");
} catch (error) {
    console.log(error.message);
}
