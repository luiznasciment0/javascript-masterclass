import Parser from './parser'
import DatabaseError from './database-error'

export class Database {
    constructor() {
        this.tables = {};
        this.parser = new Parser();
    }

    createTable(parsedStatement) {
        let [, tableName, columns] = parsedStatement;

        this.tables[tableName] = {
            columns: {},
            data: []
        };

        columns = columns.split(',');

        for (let column of columns) {
            column = column.trim().split(" ");
            const [name, type] = column;
            this.tables[tableName].columns[name] = type;
        }
    }

    insert(parsedStatement) {
        let [, tableName, columns, values] = parsedStatement;
        columns = columns.split(', ');
        values = values.split(', ');
        let row = {};
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];
            const value = values[index];
            row[column] = value;
        }
        this.tables[tableName].data.push(row);
    }

    select(parsedStatement) {
        let [, columns, tableName, whereClause] = parsedStatement;
        columns = columns.split(", ");

        let rows = this.tables[tableName].data;

        if (whereClause) {
            const [columnWhere, valueWhere] = whereClause.split(" = ");
            rows = rows.filter((row) => {
                row[columnWhere] === valueWhere;
            })
        }

        rows = rows.map((row) => {
            let selectedRow = {};

            columns.forEach((column) => {
                selectedRow[column] = row[column];
            })

            return selectedRow;
        });


        return rows;
    }

    delete(parsedStatement) {
        let [, tableName, whereClause] = parsedStatement;
        if (whereClause) {
            let [columnWhere, valueWhere] = whereClause.split(" = ");
        
            this.tables[tableName].data = this.tables[tableName].data.filter(function (row) {
                return row[columnWhere] !== valueWhere;
            });
        } else {
            this.tables[tableName].data = [];
        }
    }

    execute(statement) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.parser.parse(statement);
                if (result) {
                    resolve(this[result.command](result.parsedStatement));
                }
                
                const message = `Syntax error: '${statement}'`;
                reject(new DatabaseError(statement, message));
            }, 1000);
        });

    }
}