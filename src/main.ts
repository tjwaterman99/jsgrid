class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Grid {
    points: Array<Point>
    rows: number
    columns: number

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.points = generatePoints(rows, columns);
    }

    select(x: number, y: number) {
        let index = (x - 1) * this.columns + (y - 1)
        return this.points[index]
    }

    getRows() {
        let result = new Array<Array<Point>>
        for (let rownum = 1; rownum <= this.rows; rownum++) {
            let row = new Array<Point>
            for (let colnum = 1; colnum <= this.columns; colnum++) {
                let point = this.select(rownum, colnum)
                row.push(point)
            }
            result.push(row)
        }

        return result
    }
}

function generatePoints(rows: number, columns: number) {
    let results = new Array<Point>;
    for (let row = 1; row <= rows; row++) {
        for (let column = 1; column <= columns; column++) {
            let point = new Point(row, column)
            results.push(point)    
        }
        
    }
    return results
}

export { generatePoints, Grid };