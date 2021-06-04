/* eslint-disable @typescript-eslint/ban-types */

import {NBSObject} from '@nbsolutions/object';

export class EventEmitter extends NBSObject {
    private $callbacks: Record<string, Function[]>;

    public constructor() {
        super();
        this.$callbacks = {};
    }

    protected _on(event: string, callback: Function): void {
        if (!this.$callbacks[event]) {
            this.$callbacks[event] = [];
        }

        this.$callbacks[event].push(callback);
    }

    protected _off(event: string, callback: Function): void {
        if (this.$callbacks[event]) {
            let idx: number = this.$callbacks[event].indexOf(callback);
            if (idx > -1) {
                this.$callbacks[event].splice(idx, 1);
            }
        }
    }

    protected _emit(event: string, ...args: any[]): void {
        let callbacks: Function[] = this.$callbacks[event];
        if (callbacks) {
            for (let i: number = 0; i < callbacks.length; i++) {
                callbacks[i].apply(null, args);
            }
        }
    }
}
