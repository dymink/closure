// „Closure is when a function is able to remember and access its 
// lexical scope even when that function is executing outside 
// its lexical scope.” -Kyle Simpson „You don’t know JS”


function outer(){
    const outerVar = "message from outer scope";

    function inner(){
        return outerVar;
    }

    return inner;
}

const closure = outer();
console.log(closure());