# String Extensions
String manipulation extensions for Javascript.

Extensions:

* [isNullOrEmpty](#isnullorempty)
* [isNullOrWhitespace](#isnullorwhitespace)
* [cleanRepetations](#cleanrepetations)
* [words](#words)
* [replaceAll](#replaceall)
* [trimLeft](#trimleft)
* [trimRight](#trimright)
* [trim](#trim)
* [startsWith](#startswith)
* [endsWith](#endswith)
* [append](#append)
* [prepend](#prepend)
* [isEmail](#isemail)
* [isURL](#isurl)

## isNullOrEmpty

    var text = "";
    console.log(text.isNullOrEmpty());     // output: true
    text = "  ";
    console.log(text.isNullOrEmpty());     // output: false
    text = "text";
    console.log(text.isNullOrEmpty());     // output: false

## isNullOrWhitespace

    var text = "";
    console.log(text.isNullOrWhitespace());     // output: true
    text = "  ";
    console.log(text.isNullOrWhitespace());     // output: true
    text = "text";
    console.log(text.isNullOrWhitespace());     // output: false

## cleanRepetations   
    
    var text = "   my    name is UH";
    console.log(text.cleanRepetations());     // output: "my name is UH"
    
## words

    var text = "I love Javascript";
    console.log(text.words());        // output: ["I", "love", "Javascript"]
    text = "i_love_javascript";    
    console.log(text.words("_"));     // output: ["i", "love", "javascript"]
 
## replaceAll

    var text = "i love javascript"
    console.log(text.replaceAll(" ", "_"));     // output: "i_love_javascript"
    
## trimLeft

    var text = "     I love JavaScript";
    console.log(text.trimLeft());        // output: "I love JavaScript"

    text = "______I love JavaScript";
    console.log(text.trimLeft("_"));     // output: "I love JavaScript"

## trimRight

    var text = "I love JavaScript     ";
    console.log(text.trimRight() );        // output: "I love JavaScript"

    text = "I love JavaScript______";
    console.log(text.trimRight("_") );     // output: "I love JavaScript"

## trim

    var text = "     I love JavaScript     ";
    console.log(text.trim());                 // output: "I love JavaScript"

    text = "______I love JavaScript______";
    console.log(text.trim("_"));              // output: "I love JavaScript"
    
## startsWith

    var text = "UH is a developer";
    console.log(text.startsWith("U"));         // output: true
    console.log(text.startsWith("UH"));        // output: true
    console.log(text.startsWith("UH is"));     // output: true
    console.log(text.startsWith("a"));         // output: false

## endsWith

    var text = "UH is a developer";
    console.log(text.endsWith("r"));             // output: true
    console.log(text.endsWith("er"));            // output: true
    console.log(text.endsWith("developer"));     // output: true
    console.log(text.endsWith("UH"));            // output: false

## append

    var text = "UH is a ";
    console.log(text.append("developer"));     // output: "UH is a developer"

## prepend

    var text = " is a developer";
    console.log(text.prepend("UH"));     // output: "UH is a developer"
    
## isEmail

    var text = "some.body@domain.com";
    console.log(text.isEmail());     // output: true
    text = "some body@domain.com";
    console.log(text.isEmail());     // output: false
    
## isURL

    var text = "https://www.linkedin.com/in/ugurhasar";
    console.log(text.isURL());                        // output: true
    text = "linkedin.com/in/ugurhasar";
    console.log(text.isURL());                        // output: false


Copyright (c) 2014 Uğur Hasar 