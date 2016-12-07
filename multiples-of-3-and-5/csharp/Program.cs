// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
using System;
using System.Linq;

namespace ConsoleApplication
{
    public class Program
    {
        public static bool isMultipleOfThreeOrFive(int x) 
        {
            return (x % 3 == 0 ? true : false) || (x % 5 == 0 ? true : false);
        }

        public static void Main(string[] args)
        {
            Console.WriteLine(Enumerable.Range(0, 1000).Where(x => isMultipleOfThreeOrFive(x) == true).Sum());
        }
    }
}
// 233168