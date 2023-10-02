class Roles {
    static SUPER_ADMIN = "SuperAdmin";
    static ADMIN = "Admin";
    static MANAGER = "Manager";
    static USER = "User";
}

const getAllRoles = () => {
    return Object.values(Roles);
};

const isRoleValid = (role) => {
    role = role.toLowerCase();

    return getAllRoles()
        .map((role) => role.toLowerCase())
        .includes(role);
};

module.exports = {
    Roles,
    getAllRoles,
    isRoleValid,
};
