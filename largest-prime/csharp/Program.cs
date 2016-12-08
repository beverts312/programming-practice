// What is the largest prime factor of the number 600851475143 ?
using System;
using System.Linq;

namespace ConsoleApplication
{
    public class Program
    {
        private static long num = 600851475143;

        private static bool isPrime(int x)
        {              
            if (x < 1)
            {
                return false;
            }
            return !Enumerable.Range(2, x-2).Any(i => x % i == 0);            
        }

        private static bool isFactor(int x)
        {
                return num % x == 0 ? true : false;
        }

        public static void Main(string[] args)
        {
            var max = Convert.ToInt32(Math.Floor(Math.Sqrt(num)));
            Console.WriteLine(Enumerable.Range(0, max).Reverse().Where(x => isFactor(x)).First(x => isPrime(x)));
        }
    }
}
// 6857
