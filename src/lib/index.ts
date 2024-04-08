import { Testing } from '../types/testing.js';

// declare global {
//     interface Window {
//         Testing  : typeof Testing,
//     }
// }

(window as any).Testing = Testing;

export default {
    Testing
}