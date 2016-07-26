/**
 * Created by TBtuo on 26/07/16.
 */

var getShortMessage = require('./filter')

var wholeMessage =[
    {message: 'Tempor quis esse consequat sunt ea eiusmod.'},
    {message: 'Id culpa ad proident ad nulla laborum incididunt.'},
    {message: 'Ullamco in ea et ad anim anim ullamco est.'},
    {message: 'Est ut irure irure nisi.'},
    {message: 'Too long. This one should not show up! Tempor quis esse consequat sunt ea eiusmod.'},
]

var shortMessageText = getShortMessage(wholeMessage)
console.log(shortMessageText);








