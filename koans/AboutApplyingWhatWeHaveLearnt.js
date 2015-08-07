var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      var hasMushrooms = function(ingredient){
        return ingredient === "mushrooms"
      }

      productsICanEat = _.filter(products,function(pizza){
         return !pizza.containsNuts && !_.any(pizza.ingredients,hasMushrooms)
      })

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = _.range(1,1000).reduce(function(total,current){
      if (current % 3 === 0 || current % 5 === 0){
        return total += current;
      }
      else {
        return total;
      }
    },0);

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _.flatten(_.map(products,function(pizza){
      return pizza.ingredients;
    })).forEach(function(item){
      ingredientCount[item] = (ingredientCount[item] || 0)+1;
    })

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  
  it("should find the largest prime factor of a composite number", function () {

    var largestPrimeFactor = function(num){

      for (var i=num; i>=2; i--){
        if (num%i===0 && isPrime(i)){
          return i;
        }
      }

    }

    var isPrime = function(num){
      if (num === 2){
        return false;
      }

      else if (num%2===0){
        return false;
      }
      else {
        for (var i=3; i<=Math.sqrt(num); i+=2){
          if (num%i===0){
            return false;
          }
        }
      }
      return true;
    }

    expect(largestPrimeFactor(20)).toBe(5);
    expect(largestPrimeFactor(78)).toBe(13);
    expect(largestPrimeFactor(75)).toBe(5);
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

    var largestPalindrome = function(){
      var biggest = 0;
      for (var i=999; i>=100; i--){
        for (var j=999; j>=100; j--){
          var prod = i*j;
          if (isPalindrome(prod)){
            biggest = Math.max(biggest,prod);
          }
        }
      }

      return biggest;

    }

    var isPalindrome = function(num){
      return num==(num+'').split('').reverse().join('');
    }

    expect(largestPalindrome()).toBe(906609);
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  
});
