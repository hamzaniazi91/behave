/**
 * GesturesController
 *
 * @description :: Server-side logic for managing Gestures
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
index: function (req, res) {
    res.view(null, {
        title: 'Gestures'
    });
}
	
};