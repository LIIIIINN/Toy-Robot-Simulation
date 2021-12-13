import { getTableConfig } from "./tableConfig";
import { Position } from "./types";
import positionInfoManagement from './positionInfo';

const SINGLE_LENGTH = '1';
const MULTI_LENGTH_PARTIAL = '3';
const MULTI_LENGTH_FULL = '4';
const COMMANDS = ['MOVE', 'LEFT', 'RIGHT', 'REPORT', 'PLACE'];
export const DIRECTIONS = ['NORTH','EAST','SOUTH', 'WEST'];


const isCoordinateParamsInteger = (value: number): boolean => {

    if(Number.isInteger(value) && value >= 0) {
        return true;
    }
    console.log('validation error: number for X or Y is not correct');
    return false;
}

const isOutOfTableRange = (xAxis: number, yAxis: number, tableSize: Partial<Position>): boolean => {
    if (xAxis > tableSize.xAxis || yAxis > tableSize.yAxis || xAxis < 0 || yAxis < 0) {
        console.log('validation error: out of table range, please input a valid command');
        return false
    }
    return true;
}

const validateCoordinates = ({ xAxis, yAxis }: Position) => {
    const isXValid = isCoordinateParamsInteger(xAxis);
    const isYValid = isCoordinateParamsInteger(yAxis);
    const isOut = isOutOfTableRange(xAxis, yAxis, getTableConfig());

    return isXValid && isYValid && isOut;
}

const validateFacing = (direction: string): boolean => {
    if(DIRECTIONS.includes(direction)) {
        return true;
    }
    console.log('validation error: please input a valid direction in NORTH, EAST, SOUTH, WEST') 
    return false; 
};


const validatePosition = (position: Position) => validateCoordinates(position) && validateFacing(position.facing);

const isRobotOnTable = (): boolean => { 
    const curPostion = positionInfoManagement.get();
    if(curPostion.xAxis<0 || curPostion.yAxis<0 || !curPostion.facing) {
        console.log('validation error: please place your robot on the table first');
        return false;
    }
    return true;
}

const isCommandsLengthValid = (length: string): boolean => {

    if(![SINGLE_LENGTH, MULTI_LENGTH_PARTIAL, MULTI_LENGTH_FULL].includes(length)) {
        console.log('validation error: please input a valid command');
        return false;
    }
    return true;
}

const isCommandsValid = (command: string): boolean => {
    if(!COMMANDS.includes(command)) {
        console.log('validation error: invalid command');
        return false;
    }
    return true;
}



export { isRobotOnTable, isCommandsLengthValid, isCommandsValid, validateCoordinates };
export default validatePosition;


