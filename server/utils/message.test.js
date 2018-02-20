var expect = require('expect');

var { generateMessage } = require('./message');


describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Andrew';
        var text = 'Hey';
        
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    });
});