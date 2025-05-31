/*const { DT } = require('../utils')*/ /*todo: fix the validator*/
const  { toNormalizeStr } = require('./utils/utils')

let usersData = [];

const findUser = (user) => {
    if (!user) {
        return null;
    }

    const normalizedName = toNormalizeStr(user.name);
    const normalizedRoom = toNormalizeStr(user.room);

    return usersData.find(
        (u) => toNormalizeStr(u.name) === normalizedName
            && toNormalizeStr(u.room) === normalizedRoom
    );
}



const addUser = (user) => {

    if (!user || !user.name || !user.room) {
        throw new Error('Invalid user data: name and room are required');
    }

    const normalizedName = toNormalizeStr(user.name);
    const normalizedRoom = toNormalizeStr(user.room);

    const existingUser = usersData.find(
        (u) => toNormalizeStr(u.name) === normalizedName
            && toNormalizeStr(u.room) === normalizedRoom
    );

    if (!existingUser) {
        usersData.push(user);
    }

    return {
        isExist: !!existingUser,
        user: existingUser || user,
    };
};

module.exports = { addUser, findUser };