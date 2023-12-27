const store = require("../Rtk-Demo/app/store");
// const { fetchUsers } = require("../Rtk-Demo/features/user/userSlice");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/icecream/iceCreamSlice");
const fetchUsers = require("../Rtk-Demo/features/user/userSlice").fetchUsers;

console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});
store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());

// store.dispatch(iceCreamActions.restocked(2));
// store.dispatch(cakeActions.restocked(3));

// unsubscribe();
