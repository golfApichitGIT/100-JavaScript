// bad 
type userRole = {
   role: string
}
function assignRole(userRole: userRole) {
    console.log(userRole.role);
}

assignRole({ role: "testtest"});

// good
export enum userRole2 {
    Member = "member",
    Admin = "admin",
    Manager = "manager"
 }
 function assignRole2(userRole: userRole2) {
     console.log(userRole);
 }
 
let x = userRole2.Member

 assignRole2(x);
 