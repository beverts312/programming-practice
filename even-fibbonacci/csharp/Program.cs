// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.  
using System;

namespace ConsoleApplication
{
    public class Program
    {
        private static int Fibonacci(int x)
        {
            if (x <= 1) 
            {
                return 1;
            }
            return Fibonacci(x - 1) + Fibonacci(x - 2);
        }

        private static bool isEven(int x)
        {
            return x % 2 == 0 ? true : false;
        }

        public static void Main(string[] args)
        {
            var max = 4000000;
            var answer = 0;
            var i = 2;
            var n = 0;
            while (n < max)
            {
                if(isEven(n) == true)
                {
                    answer += n;
                }
                n = Fibonacci(i);
                i++;
            }
            Console.WriteLine(answer);
        }
    }
}
// 4613732
