const { Roles } = require("./Roles");

class AuthorizationManager {
    constructor(user) {
        this.user = user;
    }

    assertIsAdmin() {
        if (this.user.role !== Roles.ADMIN) {
            throw new Error("User is not an admin");
        }
    }

    assertIsManager() {
        if (this.user.role !== Roles.MANAGER) {
            throw new Error("User is not a manager");
        }
    }

    assertIsSuperAdmin() {
        if (!this.user.superAdmin) {
            throw new Error("User is not a super admin");
        }
    }

    anyOf(roles) {
        if (!Array.isArray(roles)) {
            throw new Error("Roles must be an array");
        }

        if (!roles.includes(this.user.role)) {
            throw new Error("Not authorized");
        }
    }

    isAccountMember(accountId) {
        if (!this.user.account) {
            throw new Error("User does not have any accounts");
        }

        if (!this.user.account === accountId) {
            throw new Error("User is not a member of the account");
        }
    }
}

module.exports = {
    AuthorizationManager,
};
