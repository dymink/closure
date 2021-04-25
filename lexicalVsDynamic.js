// Pseudo code
int x = 10;
  
int f()
{
   return x;
}
  
int g()
{
   int x = 20;
   return f();
}
  
main()
{
  printf(g());
}

// Output
// Lexical: 10
// Dynamic: 20