/**
 * =============
 * FILTERED WORD
 * =============
 * Declare a new variable named "word" for storing any word.
 * Loop for each character in variable "word" and check whether the character is valid or not.
 * 
 * Glossary =
 * |--------------------|
 * | Removed Character  |
 * |--------------------|
 * | "!"                |
 * |--------------------|
 * | "@"                |
 * |--------------------|
 * | "#"                |
 * |--------------------|
 * | "$"                |
 * |--------------------|
 * 
 * If there is any character matched with the glossary above then removed the character from variable "newWord".
 * If the character is " " (space) then replace it with "_" (underscore).
 * If the character is "." then stop the iteration.
 * Display the new word with the filtered word in your terminal.
 * 
 */

 console.log("=============");
 console.log("FILTERED WORD");
 console.log("=============");
 var word = "#! L@ve J@v@$cr!pt. S@ Much";
 // Result = "_Lve_Jvcrpt"
 
 var newWord = "";
 // Code here
 
 var i = 0;
while(i <= word.length - 1 ){

  if(word[i] === '!'){
    
  } else if(word[i] === '@'){
    
  } else if(word[i] === '#'){
    
  } else if(word[i] === '$'){
    
  } else if(word[i] === ' '){
    word[i] += '_'
  } else if(word[i] === '.'){

  } else{
    newWord += word[i]
  }
  i++;
}
 console.log(newWord);