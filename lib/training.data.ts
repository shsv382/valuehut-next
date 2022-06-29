import { training } from '../data/training';

export function getAllTrainingsIds() {
    const trainings = training.training;
    const ids = trainings.map((training) => {
        return {
            params: {
                id: training.title.toLowerCase().split(" ").join("-")
            }
        }
    })
    return ids
}