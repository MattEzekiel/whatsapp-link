import { test } from 'node:test';
import assert from 'node:assert/strict';
import formatWhatsAppUrl, { formatWhatsAppUrl as named } from './dist/index.js';

test('wa.me default stays backward compatible', () => {
    assert.equal(formatWhatsAppUrl('+1 (234) 56-489', ' Hello friend '), 'https://wa.me/123456489?text=Hello%20friend');
    assert.equal(formatWhatsAppUrl(123456489), 'https://wa.me/123456489');
    assert.equal(named, formatWhatsAppUrl);
});

test('each link type', () => {
    assert.equal(formatWhatsAppUrl('123', 'hi & bye', 'api'), 'https://api.whatsapp.com/send?phone=123&text=hi%20%26%20bye');
    assert.equal(formatWhatsAppUrl('123', undefined, 'app'), 'whatsapp://send?phone=123');
    assert.equal(
        formatWhatsAppUrl('123', 'hi', 'android'),
        'intent://send?phone=123&text=hi#Intent;scheme=whatsapp;package=com.whatsapp;S.browser_fallback_url=https%3A%2F%2Fwa.me%2F123%3Ftext%3Dhi;end',
    );
});

test('rejects empty digits and unknown types', () => {
    assert.throws(() => formatWhatsAppUrl('abc'), /at least one digit/);
    assert.throws(() => formatWhatsAppUrl('123', 'hi', 'sms'), /Unknown link type/);
});
