const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Hannah is the champion";


// it("has a 'newHeader' variable that points to an <h1> node, 'h1#victory'", () => {
//     expect(
//       newHeader.nodeName,
//       "Make sure you create an <h1> with id 'victory'"
//     ).eql("H1");
//   });