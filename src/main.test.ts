import { describe, it, expect } from "vitest";
import { generatePoints, Grid } from "./main";

describe('generatePoints', () => {
    it('create a set of points', () => {
        let points = generatePoints(2, 4);
        expect(points.length).toBe(2 * 4);
    })
})

describe('Grid', () => {
    it('contains a set of points', () => {
        let grid = new Grid(2, 4);
        expect(grid.points.length).toBe(2 * 4)
    })

    it('can select the correct point', () => {
        let grid = new Grid(3, 5);
        let point = grid.select(1, 2)
        expect(point.x).toBe(1)
        expect(point.y).toBe(2)
    })

    it('can iter a row of data', () => {
        let grid = new Grid(3, 5);
        let rows = grid.getRows()
        expect(rows.length).toBe(3)
        expect(rows[0].length).toBe(5)
        expect(rows[0][0].x).toBe(1)
        expect(rows[0][0].y).toBe(1)
    })
})
