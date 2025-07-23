const user = {
    id: 1,
    profile: {
        // fullname: "อภิชิต เปลื้องกลาง",
        address: {
            city: "โคราช"
        }
    }
};
//bed เเย่
// console.log(user.profile.fullname);

//old way เเบบดังเดิม
// if (user && user.profile.fullname !== undefined){
// console.log(user.profile.fullname);
// }

//new way (good)
const fullname  = user?.profile?.fullname;
console.log(fullname);