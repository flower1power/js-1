'use strict';

const successMassage = 'Not Error';

const user = {
  name: 'Vasa',
  roles: [],
};

function addRole(user, role) {
  if (role === 'admin') {
    const massage = 'Error';
    console.log(massage);
    return user;
  }
  user.roles.push(role);
  let successMassage = 'Yes';
  console.log(successMassage);

  function logRoles() {
    console.log(user.roles);
  }
  logRoles();
  return user;
}

console.log(addRole(user, 'dev'));
console.log(successMassage);
