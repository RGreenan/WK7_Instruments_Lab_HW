const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyView = function () {

}
// TODO: BIND EVENTS

InstrumentFamilyView.prototype.bindEvents = function () {
  PubSub.publish();

  PubSub.subscribe( () => {

  });
};

module.exports = InstrumentFamilyView;
