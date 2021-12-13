import commands from './commands';
import positionInfoManagement from './positionInfo';
import validatePosition, { isRobotOnTable, isCommandsLengthValid, isCommandsValid } from './validator';


export default function handleInputs(command: string): void {
    const inputs = command.toUpperCase().trim();
    const commCollection = inputs.split(' ');

    if(!isCommandsLengthValid(commCollection.length.toString()) || !isCommandsValid(commCollection[0])) return;

    if (commCollection[0] === 'PLACE') {
        const position = {
            xAxis: Number(commCollection[1]),
            yAxis: Number(commCollection[2]),
            facing: commCollection[3] || positionInfoManagement.get().facing,
        }

        validatePosition(position) && commands.place(position);
        
    } else {
        if(!isRobotOnTable()) return;
        commands[commCollection[0].toLowerCase()]();
    }

}