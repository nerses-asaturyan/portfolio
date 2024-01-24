class Verifier : public Trusted_setup
{
public:
    bool verify(std::string m, int s)
    {
        return simple_hash(m) == static_cast<int>(pow(s, get_public_key())) % get_modulus();
    }
};