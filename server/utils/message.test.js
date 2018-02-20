var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');


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


describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Andrew';
        var latitude = 1;
        var longitude = 2;

        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe('https://www.google.com/maps?q=1,2');
        expect(locationMessage.createdAt).toBeA('number');
    }); 
});