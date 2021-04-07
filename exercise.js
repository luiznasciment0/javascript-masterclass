const DatabaseError = function(statement, message) {
    this.statement = statement;
    this.message = message;
};

const database = {
    tables: {},
    createTable(command) {
        const regexp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = command.match(regexp);
        let [, tableName, columns] = parsedStatement;

        this.tables[tableName] = {
            columns: {},
            data: []
        };

        columns = columns.split(',');

        for (let column of columns) {
            column = column.trim().split(" ")
            const [name, type] = column
            this.tables[tableName].columns[name] = type
        }
    },
    insert(command) {
        const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
        const parsedStatement = command.match(regexp);
        let [, tableName, columns, values] = parsedStatement;
        columns = columns.split(', ')
        values = values.split(', ')
        let row = {}
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index]
            const value = values[index]
            row[column] = value;
        }
        this.tables[tableName].data.push(row);
    },
    execute(statement) {
        if (statement.startsWith('create table')) {
            return this.createTable(statement)
        }

        if (statement.startsWith('insert')) {
            return this.insert(statement)
        }
        
        const message = `Syntax error: '${statement}'`
        throw new DatabaseError(statement, message)
    }
};

try {
    database.execute('create table author (id number, name string, age number, city string, state string, country string)')
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
} catch (e) {
    console.log(e.message);
}

console.log(JSON.stringify(database, undefined, " "))