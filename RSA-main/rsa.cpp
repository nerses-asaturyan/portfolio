#include <iostream>
#include <ctime>
#include <math.h>

// getting gcd of two numbers
unsigned long long int gcd(unsigned long long int a, unsigned long long int b)
{
     if (b == 0)
     {
          return a;
     }
     unsigned long long int reminder = a % b;
     a = b;
     b = reminder;

     return gcd(a, b);
}

// encrypting message
unsigned long long int encrypt(unsigned long long int message, unsigned long long int encryption_key, unsigned long long int public_key)
{
     return fmod(pow(message, encryption_key), public_key);
}

// decrypting message
unsigned long long int decrypt(unsigned long long int cipher_text, unsigned long long int decryption_key, unsigned long long int public_key)
{
     return fmod(pow(cipher_text, decryption_key), public_key);
}

// proving if everything worked
bool RSA_worked(unsigned long long int a, unsigned long long int b)
{
     return a == b;
}

int main()
{
     srand(time(NULL));
     unsigned long long int p, q, public_key, encryption_key, decryption_key, euler_totient_n, k_random;

     std::cout << "Enter two prime numbers ";

     // getting two prime numbers
     std::cin >> p;
     std::cin >> q;

     // if p and q are co-prime then continue
     if (gcd(p, q) == 1)
     {
          // generate public key
          public_key = p * q;

          // euler totient for generating private key
          euler_totient_n = (p - 1) * (q - 1);

          // generating encryption key
          unsigned long long int possible_e = rand() % euler_totient_n + 1;
          while (gcd(possible_e, public_key) != 1)
          {
               possible_e = rand() % euler_totient_n + 1;
          }
          encryption_key = possible_e;

          // generating decryption key
          unsigned long long int k = rand() % euler_totient_n;

          while ((k * euler_totient_n + 1) % encryption_key != 0)
          {
               k = rand() % euler_totient_n;
          }
          decryption_key = (k * euler_totient_n + 1) / encryption_key;
     }
     else
     {
          std::cout << "You wrote composite number ";
          return 0;
     }

     {

          std::cout << "p\t";
          std::cout << p;
          std::cout << std::endl;
          std::cout << "q\t";
          std::cout << q;
          std::cout << std::endl;
          std::cout << "encryption key\t";
          std::cout << encryption_key;
          std::cout << std::endl;
          std::cout << "decryption key\t";
          std::cout << decryption_key;
          std::cout << std::endl;
          std::cout << "euler\t";
          std::cout << euler_totient_n;
          std::cout << std::endl;
          std::cout << "public key n\t";
          std::cout << public_key;
          std::cout << std::endl;

          unsigned long long int cipher = encrypt(10, encryption_key, public_key);
          unsigned long long int decrypted = decrypt(cipher, decryption_key, public_key);

          std::cout << "cipher text for 10 \t";
          std::cout << cipher;
          std::cout << std::endl;
          std::cout << "decrypted message\t";
          std::cout << decrypt(cipher, decryption_key, public_key);
          std::cout << std::endl;
          std::cout << RSA_worked(cipher, decrypted);
     }

     return 0;
}
