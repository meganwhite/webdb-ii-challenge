
exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
        table.increments();

        table
            .string("vinNumber",17)
            .unique()
            .notNullable()

        table
            .string("make", 128)
            .notNullable()

        table
            .string("model",128)
            .notNullable()
        
        table
            .integer("mileage")
            .notNullable()

        table
            .string("transmissionType", 128)
        
        table
            .string("titleStatus", 128)
            
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};

