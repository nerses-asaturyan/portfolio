#include <cmath>
#include <iostream>

int gcd(int a, int b)
{
    int result = std::min(a, b);
    while (result > 0)
    {
        if (a % result == 0 && b % result == 0)
        {
            break;
        }
        result--;
    }

    return result;
}

bool is_prime(int x)
{
    if (x <= 1)
    {
        return false;
    }

    for (int i = 2; i <= (sqrt(x)); i++)
    {
        if (x % i == 0)
        {
            return false;
        }
    }
    return true;
}

int euler_totient(int n)
{
    double result = static_cast<double>(n);
    double one = 1;
    for (int i = 2; i < n; i++)
    {
        if (is_prime(i) && (n % i) == 0)
        {
            result *= (one - (one / static_cast<double>(i)));
        }
    }
    return static_cast<int>(result);
}
