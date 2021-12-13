import positionInfoManagement from './positionInfo';
import { Position } from './types';
import validateCoordinates from './validator';

const rotateRightMap = {
    NORTH: 'EAST',
    EAST: 'SOUTH',
    SOUTH: 'WEST',
    WEST: 'NORTH',
}
const rotateLeftMap = {
    NORTH: 'WEST',
    EAST: 'NORTH',
    SOUTH: 'EAST',
    WEST: 'SOUTH',
}

function place(position: Position) {
    positionInfoManagement.set(position)
}

function move() {
    const curPosition: Position = positionInfoManagement.get();
    let postPosition: Position;

    switch(curPosition.facing) {
        case 'NORTH':
            postPosition = {
                xAxis: curPosition.xAxis, 
                yAxis: curPosition.yAxis+1,
                facing: curPosition.facing
            }
        break;
        case 'SOUTH':
            postPosition = {
                xAxis: curPosition.xAxis, 
                yAxis: curPosition.yAxis-1,
                facing: curPosition.facing
            }
        break;
        case 'WEST':
            postPosition = {
                xAxis: curPosition.xAxis-1, 
                yAxis: curPosition.yAxis,
                facing: curPosition.facing
            }
        break;
        case 'EAST':
            postPosition = {
                xAxis: curPosition.xAxis+1, 
                yAxis: curPosition.yAxis,
                facing: curPosition.facing
            }
        break;
    }

    if(!validateCoordinates(postPosition)) return;
    
    positionInfoManagement.set(postPosition);
}

function left() {
    const curPosition: Position = positionInfoManagement.get();
    const facing = rotateLeftMap[curPosition.facing];
    positionInfoManagement.set({...curPosition, facing});
}

function right() {
    const curPosition: Position = positionInfoManagement.get();
    const facing = rotateRightMap[curPosition.facing];
    positionInfoManagement.set({...curPosition, facing});

}

function report() {
    const { xAxis, yAxis, facing } = positionInfoManagement.get();
    console.log(`Output: ${xAxis} ${yAxis} ${facing}`)
}

const commands =  {
    place: place,
    move: move,
    left: left,
    right: right,
    report: report,
};

export default commands;

