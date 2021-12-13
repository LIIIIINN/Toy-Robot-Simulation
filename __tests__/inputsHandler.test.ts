import handleInputs from '../src/inputsHandler';
import positionInfoManagement from '../src/positionInfo';

describe('handle inputs', () => {
    beforeEach( () => {
        positionInfoManagement.set({
            xAxis: null,
            yAxis: null,
            facing: undefined
        })
    });

    it('should have position info updated once input a valid command: place 3 3 north', () => {
        handleInputs('place 3 3 north');
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 3,
            facing: 'NORTH'
        });
    });

    it('should have position info updated once input a valid command: move after placing robot on table', () => {
        handleInputs('place 3 3 north');
        handleInputs('move');
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 4,
            facing: 'NORTH'
        });
    });

    it('should have position info updated once input a valid command: left after placing robot on table', () => {
        handleInputs('place 3 3 north');
        handleInputs('left');
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 3,
            facing: 'WEST'
        });
    });

    it('should have position info updated once input a valid command: right after placing robot on table', () => {
        handleInputs('place 3 3 north');
        handleInputs('right');
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 3,
            facing: 'EAST'
        });
    });

    it('should have no position info update once input an invalid command', () => {
        handleInputs('akjhdakjh');
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: null,
            yAxis: null,
            facing: undefined
        });
    });

    it('should have no position info update once input an invalid command, which is out of range', () => {
        handleInputs('place 7 7 north');
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: null,
            yAxis: null,
            facing: undefined
        });
    });

    it('should have no position info update once about to move out of table, which is out of range', () => {
        handleInputs('place 1 6 north');
        handleInputs('move');

        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 1,
            yAxis: 6,
            facing: 'NORTH'
        });
    });
});