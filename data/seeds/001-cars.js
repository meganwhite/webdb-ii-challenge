
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vinNumber:"1G6CD1184H4323745",
          make:"Cadillac",
          model:"DeVille",
          mileage:"34343",
          transmissionType:"manual",
          titleStatus:"clean"
        },
        {
          vinNumber:"JN1CV6AP4CM626941",
          make:"Infiniti",
          model:"G37",
          mileage:"34343",
          transmissionType:"automatic",
          titleStatus:"clean"
        },
        {
          vinNumber:"SAJGX2040XC042591",
          make:"Jaguar",
          model:"XK Series",
          mileage:"34343",
          transmissionType:"manual",
          titleStatus:"clean"
        },
      ]);
    });
};
