import TrainingDayModel from '../models/TrainingDayModel';

export class TrainingDayController {
    constructor() {
        this.trainingDays = []; 
    }

    addTrainingDay(date) {
        const newDay = new TrainingDayModel(Date.now(), date);
        this.trainingDays.push(newDay);
        return newDay;
    }

    removeTrainingDay(dayId) {
        this.trainingDays = this.trainingDays.filter(day => day.id !== dayId);
    }
}
