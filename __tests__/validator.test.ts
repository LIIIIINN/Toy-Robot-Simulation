import validatePosition, { isRobotOnTable, isCommandsLengthValid, isCommandsValid, validateCoordinates } from '../src/validator';
import positionInfoManagement from "../src/positionInfo";

describe('validator', () => {

    beforeEach( () => {
        positionInfoManagement.set({
            xAxis: null,
            yAxis: null,
            facing: undefined
        })
    });

    it('isRobotOnTable true after place robot on table', () => {
        positionInfoManagement.set({
            xAxis: 2,
            yAxis: 2,
            facing: 'NORTH'
        })
        const result = isRobotOnTable();
        expect(result).toEqual(true);
    });

    it('isRobotOnTable false before place robot on table', () => {
        const result = isRobotOnTable();
        expect(result).toEqual(false);
    });

    it('isCommandsLengthValid: valid', () => {
        const resultForSingle = isCommandsLengthValid('1');
        const resultForPartial = isCommandsLengthValid('3');
        const resultForFull = isCommandsLengthValid('4');

        expect(resultForSingle&&resultForPartial&&resultForFull).toEqual(true);
    })

    it('isCommandsLengthValid: invalid', () => {
        const result = isCommandsLengthValid('2');
        expect(result).toEqual(false);
    })

    it('isCommandsValid: valid', () => {
        const resultMove = isCommandsValid('MOVE');
        const resultPlace = isCommandsValid('PLACE');
        const resultLeft = isCommandsValid('LEFT');
        const resultRight = isCommandsValid('RIGHT');
        const resultReport = isCommandsValid('REPORT');

        const result = [resultMove, resultPlace, resultLeft, resultRight, resultReport].includes(false);
        expect(!result).toEqual(true);
    })

    it('isCommandsValid: invalid', () => {
        const result = isCommandsValid('sasasdad');
        expect(result).toEqual(false);
    })

    it('validateCoordinates: valid', () => {
        const position = {
            xAxis: 1, 
            yAxis: 1, 
            facing: 'NORTH',
        }
        const result = validateCoordinates(position);
        expect(result).toEqual(true);
    })

    it('validateCoordinates: invalid, out of table range', () => {
        const position = {
            xAxis: 7, 
            yAxis: 7, 
            facing: 'NORTH',
        }
        const result = validateCoordinates(position);
        expect(result).toEqual(false);
    })

    it('validateCoordinates: invalid, should be integer', () => {
        const position = {
            xAxis: 1.222, 
            yAxis: -3, 
            facing: 'NORTH',
        }
        const result = validateCoordinates(position);
        expect(result).toEqual(false);
    })

    it('validatePosition: valid', () => {
        const position = {
            xAxis: 1, 
            yAxis: 3, 
            facing: 'NORTH',
        }
        const result = validatePosition(position);
        expect(result).toEqual(true);
    })

    it('validatePosition: invalid', () => {
        const position = {
            xAxis: 1, 
            yAxis: 3, 
            facing: 'sdada',
        }
        const result = validatePosition(position);
        expect(result).toEqual(false);
    })    
});