
import NBSObject from '@nbsolutions/object';
import {EventEmitter} from '../src/EventEmitter';

describe('EventEmitter', () => {
    class TestEmitter extends EventEmitter {
        public onVoidHandler(callback: () => void): void {
            this._on('void', callback);
        }

        public offVoidHandler(callback: () => void): void {
            this._off('void', callback);
        }

        public emitVoid(): void {
            this._emit('void');
        }

        public onProgressHandler(callback: (bytesRead: number, totalBytes: number) => void): void {
            this._on('Progress', callback);
        }
        
        public offProgressHandler(callback: (bytesRead: number, totalBytes: number) => void): void {
            this._off('Progress', callback);
        }
        
        public emitProgress(bytesRead: number, totalBytes: number): void {
            this._emit('Progress', bytesRead, totalBytes);
        }
    }

    class Test extends NBSObject {
        static _instance: Test;

        constructor() {
            super();
            Test._instance = this;
        }

        onProgress(bytesRead: number, total: number): void {

        }

        onProgressWithThis(bytesRead: number, total: number): void {
            expect(this).toBe(Test._instance);
        }
    }

    let emitter: TestEmitter;

    beforeEach(() => {
        emitter = new TestEmitter();
    });

    it('can attach event', () => {
        let cb = (): void => {};
        emitter.onVoidHandler(cb);
        expect((emitter as any).$callbacks['void']).toEqual([ cb ]);
    });

    it('can remove event', () => {
        let cb = (): void => {};
        emitter.onVoidHandler(cb);
        emitter.offVoidHandler(cb);
        expect((emitter as any).$callbacks['void']).toEqual([]);
    });
    
    it('can emit events', () => {
        let listener: Test = new Test();
        spyOn(listener, 'onProgress');

        emitter.onProgressHandler(listener.onProgress);
        emitter.emitProgress(25, 100);
        expect(listener.onProgress).toHaveBeenCalledWith(25, 100);
    });

    it('maintains callback binding', () => {
        let listener: Test = new Test();

        emitter.onProgressHandler(listener.onProgressWithThis);
        emitter.emitProgress(25, 100);
    });
});
