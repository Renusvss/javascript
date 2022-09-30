var mapmethod = (arg1, arg2) => {
  console.log(arg1, arg2);
};
mapmethod(1, 2);

var mapmethod1 = (arg1, arg2) => {
  console.log(arg1, arg2);
};
mapmethod1(mapmethod);
