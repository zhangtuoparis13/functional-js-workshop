/**
 * Created by TBtuo on 26/07/16.
 */

function getShortMessages(messages) {
    // SOULUTION GOES HERE
    return messages
        .filter(function (obj) {
        return obj.message.length <= 50
        })
        .map(function (obj) {
            return obj.message
        })
}

module.exports = getShortMessages