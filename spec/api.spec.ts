
import * as api from '../src/api';
import {EventEmitter} from '../src/EventEmitter';

describe('Public API', () => {
    it('EventEmitter', () => {
        expect(api.EventEmitter).toBe(EventEmitter);
    });
});
