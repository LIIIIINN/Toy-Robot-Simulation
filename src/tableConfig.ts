import { Position } from "./types";


const X_MAX_VALUE = 6;
const Y_MAX_VALUE = 6;

export const getTableConfig = ():  Pick <Position, 'xAxis' | 'yAxis'> => {
    return {
        xAxis: X_MAX_VALUE,
        yAxis: Y_MAX_VALUE,
    }
}