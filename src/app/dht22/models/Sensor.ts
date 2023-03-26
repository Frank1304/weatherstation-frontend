export class Sensor {
    constructor(
        public id: number,
        public timestamp: Date,
        public humidity: number, 
        public temperature: number
    ) {}
}