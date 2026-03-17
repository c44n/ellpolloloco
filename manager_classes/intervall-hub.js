import { MovableObject } from "../models/movable-object.class.js";

export class IntervalHub extends MovableObject {
    static allIntervals = [];

    // Startet ein neues Intervall und
    // fügt es dem Array allIntervals hinzu
    static startInterval(func, timer) {
        const newInterval = setInterval(func, timer);
        IntervalHub.allIntervals.push(newInterval);
    }

    static stopAllIntervals() {
        IntervalHub.allIntervals.forEach(clearInterval);
        IntervalHub.allIntervals = [];
    }
}