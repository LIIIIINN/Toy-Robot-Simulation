import { Position } from "./types";

class PositionInfo {
    protected xAxis: number | null;
    protected yAxis: number | null;
    protected facing: string | undefined;
    private static _instance: unknown;
    constructor() {
        if (!PositionInfo._instance) {
            PositionInfo._instance = this
        }
        else {
            console.log('you are only allowed to create one table');
        }
        this.xAxis = null;
        this.yAxis = null;
        this.facing = undefined;
    }

    public get(): Position{
        return {
            xAxis: this.xAxis, 
            yAxis: this.yAxis, 
            facing: this.facing,
        }
    }

    public set({xAxis, yAxis, facing}: Position) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.facing = facing;
        return true;
    }
}

const positionInfoManagement = new PositionInfo();
export default positionInfoManagement;
