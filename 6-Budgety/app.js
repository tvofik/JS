
// BUDGET CONTROLLER

var budgetController = (function () {
  
  var Expense = function (id,description,value){
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function(totalIncome){
    if (totalIncome > 0) {
      
      this.percentage = Math.round((this.value / totalIncome) * 100);

    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id,description,value){
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  var calculateTotal = function (type){
    var sum = 0;
    data.allItems[type].forEach(function(current){
      sum += current.value;
    }); 

    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      inc:[],
      exp: []
    },
    totals: { 
      inc: 0,
      exp: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: function (type, des, val) {
      
      var newItem,ID;
      
      // create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      
      // create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID,des,val);

      } else if ( type === 'inc') {
        newItem = new Income(ID,des,val);
      }
      // push it into our data stucture
      data.allItems[type].push(newItem);
      // return new item
      return newItem;
    },

    deleteItem: function (type, id) {
      var ids, index;
      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index,1);
      }

    },

    calculateBudget: function(){

      // calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // Calculate the budget income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calculate the percentage of income that we have spent
      if (data.totals.inc > 0) {
        
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        
      } else {
        data.percentage = -1;
      }

    },

    calculatePercentages: function (){
      data.allItems.exp.forEach(function(current){
        current.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function(){
      var allPerc = data.allItems.exp.map(function(current){
        return current.getPercentage();
      });

      return allPerc;
    
    },

    getBudget: function(){

      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }

    },

    testing: function(){
      console.log(data);
    }

  }

})();

// UI CONTROLLER

var uiController = (function(){

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    contianer: '.container',
    expensesPercLabel: '.item__percentage'
  }

  return {
    getInput: function(){
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      };
    },

    addListItem: function(obj,type){

      var html, newHtml, element;

      // create HTML string with placeholder text

      if(type === 'inc'){

        element = DOMStrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        
      } else if (type === 'exp'){

        element = DOMStrings.expenseContainer;
        html = '<div class="item clearfix" id = "exp-%id%" ><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

      }

      // replace placeholder text with actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%',obj.value);

      // insert the HTML into the DOM

      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },

    deleteListItem: function (selectorID){
      
      var el = document.getElementById(selectorID);

      el.parentNode.removeChild(el);

    },

    clearFields: function (){

      var fields, fieldsArr;

      fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current, index, array) {
        current.value = "";
      });

      fieldsArr[0].focus();

    },

    displayBudget: function(obj){
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp;
      if (obj.percentage > 0) {
        
        document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
        
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '--';

      }
    },

    displayPercentages: function (percentages) {

      var fields;

      fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
      
      var nodeListForEach = function(list, callback){
        for (let i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      nodeListForEach(fields, function(current, index){
        
        if (percentages[index] > 0 ) {

          current.textContent = percentages[index] + '%';
          
        } else {
          
          current.textContent = '--';
        
        }

      });

    },

    getDOMstrings: function (){
      return DOMStrings;
    }
  };
})();

// GLOBAL CONTROLLER

var controller = (function(budgetCtrl, uiCtrl){

  var setupEventListeners = function(){
    
    var DOM = uiCtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }

    });

    document.querySelector(DOM.contianer).addEventListener('click', ctrlDeleteItem);

  };

  var updateBudget = function () {

    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    uiCtrl.displayBudget(budget);
  };

  var updatePercentages = function (){

    // 1. Calculate update percentages
    budgetCtrl.calculatePercentages();

    // 2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3. update th UI with the new percentage
    uiCtrl.displayPercentages(percentages);
  };

  
  var ctrlAddItem = function (){

    var input, newItem;

    // 1. Get the filed input data
    input = uiCtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      
      // 2. Add the data to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
  
      // 3. update the item to the UI
      uiCtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      uiCtrl.clearFields();
      
      // 5. Calculate and update budget
      updateBudget();

      // 6. calculate and update percentage
      updatePercentages();
    }

  };

  var ctrlDeleteItem = function(event){

    var itemId, splitId, type, ID;

    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemId) {

      splitId = itemId.split('-');
      
      type = splitId[0];

      ID = Number(splitId[1]);

      // delete the item from data structure
      budgetCtrl.deleteItem(type, ID);

      // delete the itme from the UI
      uiCtrl.deleteListItem(itemId);
      
      // Update and show the new budget
      updateBudget();

      // calculate and update percentage
      updatePercentages();
    
    }

  };

  return {
    init: function(){
      setupEventListeners();
      uiCtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
    }
  }

})(budgetController, uiController);

// To start the application
controller.init();
