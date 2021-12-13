import positionInfoManagement from "../src/positionInfo";
import commands from '../src/commands';

describe('commands', () => {

    beforeEach( () => {
        positionInfoManagement.set({
            xAxis: 3,
            yAxis: 3,
            facing: 'NORTH'
        })
    });

    afterEach(() => {
        positionInfoManagement.set({
            xAxis: 3,
            yAxis: 3,
            facing: 'NORTH'
        })
    });

    it('run move() command correctly with facing north', () => {
        commands.move();
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 4,
            facing: 'NORTH'
        });
    });
    it('run move() command correctly with facing west', () => {
        positionInfoManagement.set({
            xAxis: 3,
            yAxis: 4,
            facing: 'WEST'
        })
        commands.move();
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 2,
            yAxis: 4,
            facing: 'WEST'
        });
    });

    it('run move() command correctly with facing east', () => {
        positionInfoManagement.set({
            xAxis: 3,
            yAxis: 4,
            facing: 'EAST'
        })
        commands.move();
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 4,
            yAxis: 4,
            facing: 'EAST'
        });
    });
    it('run move() command correctly with facing south', () => {
        positionInfoManagement.set({
            xAxis: 3,
            yAxis: 4,
            facing: 'SOUTH'
        })
        commands.move();
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 3,
            facing: 'SOUTH'
        });
    });

    it('run left() command correctly', () => {
        commands.left();
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 3,
            facing: 'WEST'
        });
    });

    it('run right() command correctly', () => {
        commands.right();
        const result = positionInfoManagement.get();
        expect(result).toEqual({
            xAxis: 3,
            yAxis: 3,
            facing: 'EAST'
        });
    });

    it('run place() command correctly', () => {
        const curPosition = {
            xAxis: 4,
            yAxis: 4,
            facing: 'EAST'
        }
        commands.place(curPosition);
        const result = positionInfoManagement.get();
        expect(result).toEqual(curPosition);
    });
});