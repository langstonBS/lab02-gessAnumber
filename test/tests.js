import '../app.js';

const test = QUnit.test;

test('funtion compareNumbers()', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    var result = compareNumbers(3, 3);
    var result1 = compareNumbers(2, 3);
    var result2 = compareNumbers(4, 3);
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
    assert.equal(result1, -1);
    assert.equal(result2, 1);
    
});