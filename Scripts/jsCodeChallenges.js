//Code Challenge 1: MATH 
//When page is completely loaded then it will run this function
$(document).ready(function () {
    //Hide code in Modals -------------------------------------------------
    $("#ShowCodeMath").hide();
    $("#ShowCodeFactorial").hide();
    $("#ShowCodeFizzBuzz").hide();
    $("#ShowCodePalindrome").hide();
    //MATH Exercise----------------------------------------------------------

    //click btn to do math 
    $("#btnCalculate").click(function () {
        //store inputs into variables
        var n1 = Number($("#n1").val());
        var n2 = Number($("#n2").val());
        var n3 = Number($("#n3").val());
        var n4 = Number($("#n4").val());
        var n5 = Number($("#n5").val());
        //Do Math
        var smallest = Math.min(n1, n2, n3, n4, n5);
        var largest = Math.max(n1, n2, n3, n4, n5);
        var sum = n1 + n2 + n3 + n4 + n5;
        var product = n1 * n2 * n3 * n4 * n5;
        var avg = sum / 5;
        //display results
        $("#rsltSmallN").text("The smallest number is: " + smallest);
        $("#rsltLargeN").text("The largest number is: " + largest);
        $("#rsltAvgN").text("The average number is: " + avg);
        $("#rsltSumN").text("The sum number is: " + sum);
        $("#rsltProductN").text("The Product number is: " + product);        
    });    
    //Try again button is clicked
    $("#btnClear").click(function(){
        //clear textboxes
        $("#n1,#n2,#n3,#n4,#n5").val("");
        //clear result fields
        $("#rsltSmallN").text("");
        $("#rsltLargeN").text("");
        $("#rsltAvgN").text("");
        $("#rsltSumN").text("");
        $("#rsltProductN").text("");
    });
    //show code
    $("#btnShowCodeMath").click(function () {
        $("#ShowCodeMath").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        }else {
            $(this).text("Show Code");
        };
    });

    //----------------------------------------------------------------------
    //FACTORIAL Exercise

    //Calculate button clicked
    $("#btnFactorialCalc").click(function(){
        //DO MATH
        var fN = Number($("#inputFactorialN").val());
        //check to see if number is less than 170 otherwise proceed
        if (fN > 170){
            alert("Number has to be less than 170 and non-negative.");
            //$("#inputFactorialN").val("");
        }
        //try using recursion to get factorial
        function factorial(fN){
            //terminate recursion function
            if (fN < 0){
                return;
            }
            //base case
            if (fN === 0){
                return 1;
            }
            //recursion
            return fN * factorial(fN-1);
        }
        //display result
        $("#rsltFactorial").text("The Factorial for " + fN  + " is: " + factorial(fN));
    });    
    //clear button clicked
    $("#btnClearFactorial").click(function(){
        $("#inputFactorialN").val("");
        $("#rsltFactorial").text("");
    });    
    //show code
    $("#btnFactorialShowCode").click(function () {
        $("#ShowCodeFactorial").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        };
    });

    //----------------------------------------------------------------------
    //FIZZBUZZ Exercise

    //fizzbuzz button is clicked
    $("#btnFizzBuzz").click(function(){
        //initialize variabales
        var n1 = $("#fbizzInput1").val();
        var n2 = $("#fbizzInput2").val();
        var output = "";
        //making loop to count 100
        for(var i = 1; i <= 100; i++){
            //if statement to check if both inputs have remainders if true concatinate
            if(i % n1 == 0 && i % n2 == 0){
                output += "FIZZBUZZ, ";
            }else if(i % n1 == 0){
                output += "fizz, ";
            }else if(i % n2 == 0){
                output += "buzz, ";
            }else{
                output += i + ", ";
            }
        }

        output


        //result
        $("#rsltFizzBuzz").html(output);
    })
    //clear button cleared
    $("#btnFizzBuzzClear").click(function(){
        $("#fbizzInput1").val("");
        $("#fbizzInput2").val("");
        $("#rsltFizzBuzz").text("");
    });
    //Show Code
    $("#btnFizzBuzzShowCode").click(function () {
        $("#ShowCodeFizzBuzz").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        };
    });
    //---------------------------------------------------------------------
    //PALINDROME Exercise

    //palindrome button clicked
    $("#btnPalindrome").click(function () {
        //get text to test
        //if statement to check if user typed anything in

        //get word
        var word = $("#inputPalindrome").val();
        //function to check word
        function palindrome(word) {
            //Split, reverse and join string to get reversed text
            var reversedText = word.toLowerCase().split('').reverse().join('');
            //check to see if the word matches first word           
            return word === reversedText;
        }
        //simple if statement to check if function returns true or false
        if (palindrome(word) == true) {
            var torFalse = "is";
        } else {
            torFalse = "is not";
        }
        //display result
        $("#rsltPalindrome").text("The word " + word + " " + torFalse + " a palindrome.");
    });    
    //clear button is clicked
    $("#btnClearPalindrome").click(function(){
        $("#inputPalindrome").val("");
        $("#rsltPalindrome").text("");
    });
    //show code
    $("#btnPalindromeShowCode").click(function () {
        $("#ShowCodePalindrome").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        };
    });
});




