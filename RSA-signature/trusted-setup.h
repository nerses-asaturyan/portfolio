#include <iostream>
#include <functional>
#include "helper_functions.h"

class Trusted_setup
{
public:
    std::string message;
    int public_key = 0;
    int simple_hash(std::string s);
    void create_public_key();
    void create_private_key();
    int get_public_key();
    int get_modulus();

protected:
    int private_key = 0;

private:
    int p = 97;
    int q = 431;
    int n = p * q;
};

int Trusted_setup::get_modulus()
{
    return n;
};

void Trusted_setup::create_public_key()
{
    int euler_totient_n = euler_totient(n);

    for (int i = 2;; i++)
    {
        if (gcd(euler_totient_n, i) == 1)
        {
            public_key = i;
            return;
        }
    }
    std::cout << "Public key generation failed " << public_key << std::endl;
}

int Trusted_setup::get_public_key()
{
    return public_key;
}

void Trusted_setup::create_private_key()
{
    int euler_totient_n = euler_totient(n);
    for (int i = 1;; i++)
    {
        if (((i * public_key) % euler_totient_n) == 1)
        {
            private_key = i;
            return;
        }
    }
    std::cout << "Private key generation failed " << private_key << std::endl;
};

int Trusted_setup::simple_hash(std::string s)
{
    return std::hash<std::string>{}(s) % 2147483647;
}