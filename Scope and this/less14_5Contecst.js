'use strict';

const user = {
  name: 'Viktor',
  surname: 'Lob',
  age: 20,
  getUserInfo: function () {
    //? тут this будет объектом
    console.log(this);
    console.log(`${this.name} ${this.surname}`);

    //? тут this будет undefined
    // function is18YO() {
    //   if (this.age >= 18) {
    //     console.log('Yes');
    //   } else {
    //     console.log('No');
    //   }
    // }
    // is18YO();
    //? тут this будет объектом
    const is18YO = () => {
      if (this.age >= 18) {
        console.log('Yes');
      } else {
        console.log('No');
      }
    };
    is18YO();
  },
  //? тут this будет window
  getUserInfoArrow: () => {
    console.log(this);
    console.log(`${this.name} ${this.surname}`);
  },
};

user.getUserInfo();
user.getUserInfoArrow();
