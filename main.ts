import inquirer from "inquirer";

const answers:{
    Sentence:string
}= await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter your sentence to count"
    }
])
const words = answers.Sentence.trim().split(" ")
console.log(`Your sentence word count is ${words.length}`);





