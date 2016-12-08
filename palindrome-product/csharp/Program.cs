// Find the largest palindrome made from the product of two 3-digit numbers.
using System;
using System.Linq;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        private static bool isPalindrome(int x)
        {
            var xChars = Convert.ToString(x).ToCharArray();
            var length = xChars.Length;
            return !Enumerable.Range(0, length).Any(i => xChars[i] != xChars[(length - 1) - i]);
        }


        public static void Main(string[] args)
        {
            var t = 0;
            var possible = new List<int>();
            for (var i = 100; i < 999; i++)
            {
                for (var j = 100; j < 999; j++)
                {
                    t = i * j;
                    if(isPalindrome(t) == true)
                    {
                        possible.Add(t);
                    }
                }
            }
            possible.Sort();
            Console.WriteLine(possible.Last());
        }
    }
}
// 906609