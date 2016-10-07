/**
 * Created by TBtuo on 26/07/16.
 */

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function (submitteduser) {
            return goodUsers.some(function (goodUser) {
                return submitteduser.id === goodUser.id
            })
        })
    };
}



module.exports = checkUsersValid;
