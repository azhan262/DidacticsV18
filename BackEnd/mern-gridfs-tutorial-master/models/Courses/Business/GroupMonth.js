//need to connect mongoose

const mongoose = require('mongoose');


//Using mongoose model property to create model for Student
//Then, specify the schema of the model i.e, define column names
//We have to pass model name 'Student' into the model
//For Crud, we will need to use this structure and their names i.e name,position,office etc



var SectionsBusinessGroupMonth = mongoose.model('SectionsBusinessGroupMonth', {
    sectionName: {type: String},
    student1: {},
    student2: {},
    student3: {},
    student4: {},
    student5: {},
    student6: {},
    student7: {},
    student8: {},
    student9: {},
    student10: {}
  

});





//Now we dont to insert a new record called Employee, we need to just insert data
//We export it as an object 

module.exports = { SectionsBusinessGroupMonth };
