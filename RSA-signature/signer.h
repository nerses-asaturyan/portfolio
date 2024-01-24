#include <cmath>

class Signer : protected Trusted_setup
{
public:
    int sign(std::string m)
    {

        int exponent = private_key;
        float base = simple_hash(m), result = 1;

        while (exponent != 0)
        {
            result *= base;
            --exponent;
        }

        return static_cast<int>(pow(simple_hash(m), private_key)) % Trusted_setup::get_modulus();
    };
};