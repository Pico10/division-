using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            double num1, num2, division;
            try
            {
                Console.Write("ingrese su primer numero");
                num1 = Convert.ToDouble(Console.ReadLine());

                Console.Write("ingrese su segundo numero");
                num2 = Convert.ToDouble(Console.ReadLine());

                division = num1 / num2;

                if (num2 == 0)
                {
                    Console.WriteLine("no se puede dividir por 0");
                }
                else
                {
                    Console.WriteLine("el resultado de la division es {0}", division);
                }

            }
            catch(Exception error)
            {
                Console.WriteLine(error.Message);
            }
            

        }
    }
}
