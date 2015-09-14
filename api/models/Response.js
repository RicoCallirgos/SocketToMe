/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    question: {
      model: 'question',
      required: true
    },

    description: {
      type: 'text'
    },

    type: {
        type: 'string',
        enum: ['start', 'stop', 'continue']
    }

  }
};

