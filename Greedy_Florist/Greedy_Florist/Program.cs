using System;

namespace Greedy_Florist
{
    class Program
    {
        static void Main(string[] args)
        {
            var flowers = new int[] { 2, 6, 5 };
            var people = 2;


            Console.WriteLine(finalPrice(flowers, people));
        }

        public static int finalPrice (int[] flowers, int people)
        {
            Array.Sort(flowers);
            Array.Reverse(flowers);
            var multiplier = 0;
            var finalPrice = 0;
            var count = 1;

            foreach(int flower in flowers)
            {
                if (count > people)
                {
                    multiplier++;
                    count = 1;
                }

                finalPrice = finalPrice + flower * (multiplier + 1);
                count++;
            }

            return finalPrice;

        }
    }
}
