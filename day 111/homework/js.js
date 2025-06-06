const getFullName = ({ firstName, lastName = "Doe" }) => `${firstName} ${lastName}`;
const sumArray = (arr = [1, 2, 3]) => arr.reduce((sum, num) => sum + num, 0);
const runFunction = (fn = () => 10) => fn();
