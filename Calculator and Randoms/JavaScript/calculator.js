//creates an object to keep track of values
const calculator =  {
    display_Value: "0",     //this is display 0 on the screen
    first_Operand: null,    //this will hold the first operand for any expressions, we set it to null for now                  
    wait_Second_Operand: false,     //this checks whether or not the second operand has been input
    operator: null,     //this will hold the operator, we set it to null for now
};

//this modifies values each time a button is clicked 
function input_Digit(digit)     {
    const {display_Value, wait_Second_Operand} = calculator;
    if (wait_Second_Operand === true)   {           //we are checking to see if WAIT SECOND OPER is true and set
        calculator.display_Value = digit;            //Display_value to the key that was clicked.
        calculator.wait_Second_Operand = false;
    } else  {
        calculator.display_Value = display_Value === "0" ? digit : display_Value + digit;       //this overwrites display value if the current value is zero
    }                                                                                           //otherwise it adds onto it.
}

//this section handles decimal points
function input_Decimal(dot)     {
    if (calculator.wait_Second_Operand === true) return;    //this ensures that accidental clicking of the decimal point
    if (!calculator.display_Value.includes(dot))     {       //doesnt cause bugs in your operation
        calculator.display_Value += dot;
    }                                               //we are saying that if the display_value doesnt contain a decimal point
}                                                   //we want to add a decimal point

//this section handles operators
function handle_Operator(next_Operator)    {
    const {first_Operand, display_Value, operator} = calculator
    const value_of_Input = parseFloat(display_Value); //when an operator key is pressed, we convert the current number displayed on the screen to a number and then store the result in Calculator.first_operand if it doenst already exist
    if (operator && calculator.wait_Second_Operand)     { 
        calculator.operator = next_Operator;         //checks if an operator already exists and if wait_second_operand is true, then updates the operator and exits from the function.
        return;
    }
    if (first_Operand == null)  {
        calculator.first_Operand = value_of_Input;
    } else if (operator)    { //checks if an operator already exists
        const value_Now = first_Operand || 0;
        //if operator already exist, property lookup is performed for the operator
        //in the perform _calculation object and the function that matches the operator is excuted
        const result = perform_Calculation[operator](value_Now, value_of_Input);
        calculator.display_Value = String(result);
        calculator.first_Operand = result;
    }
    calculator.wait_Second_Operand = true;
    calculator.operator = next_Operator;
}

const perform_Calculation = {
    "/": (first_Operand, second_Operand) => first_Operand / second_Operand,
    "*": (first_Operand, second_Operand) => first_Operand * second_Operand,
    "+": (first_Operand, second_Operand) => first_Operand + second_Operand,
    "-": (first_Operand, second_Operand) => first_Operand - second_Operand,
    "=": (first_Operand, second_Operand) => second_Operand
};

function calculator_Reset()     {
    calculator.display_Value = "0";
    calculator.first_Operand = null;
    calculator.wait_Second_Operand = false;
    calculator.operator = null;
}

//this function updates the screen with the contents of Display_value
function update_Display()   {
    const display = document.querySelector(".calculator-screen");
    display.value = calculator.display_Value;
}

update_Display();
const keys = document.querySelector(".calculator-keys"); //this section monitors button clicks
keys.addEventListener("click", (event) =>   {
    //the target variable is an object that represents the element
    //that was clicked
    const {target} = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches("button"))  {
        return;
    }
    if (target.classList.contains("operator"))  {
        handle_Operator(target.value);
        update_Display();
        return;
    }
    if (target.classList.contains("decimal"))   {
        input_Decimal(target.value);
        update_Display();
        return;
    }
    //ensures that AC clears the numbers from the calculator
    if (target.classList.contains("all-clear"))     {
        calculator_Reset();
        update_Display();
        return;
    }
    input_Digit(target.value);
    update_Display();
})