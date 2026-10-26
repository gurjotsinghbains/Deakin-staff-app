
import { faker } from '@faker-js/faker';

const stafflist =[
{
key:0,
image : faker.image.personPortrait(),
name:  faker.person.fullName(),
job :faker.person.jobTitle()
},
{
    key:1,
image : faker.image.personPortrait( { size:'128'}),
name:  faker.person.fullName(),
job :faker.person.jobTitle()
},
{
    key:2,
image : faker.image.personPortrait( { size:'128'}),
name:  faker.person.fullName(),
job :faker.person.jobTitle()
},{
    key:3,
image : faker.image.personPortrait( { size:'128'}),
name:  faker.person.fullName(),
job :faker.person.jobTitle()
}
,{
key:4,
image : faker.image.personPortrait( { size:'128'}),
name:  faker.person.fullName(),
job :faker.person.jobTitle()
}




]
export default stafflist;