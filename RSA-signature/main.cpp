#include <iostream>
#include "trusted-setup.h"
#include "signer.h"
#include "verifier.h"

int main()
{
    Trusted_setup my_setup;
    Signer my_signer;
    Verifier my_verifier;

    std::string message = "You are hired";

    my_setup.message = message;

    my_setup.create_public_key();
    my_setup.create_private_key();

    int signed_message = my_signer.sign(my_setup.message);

    std::cout << my_verifier.verify("anyway you are hired", signed_message);

    return 0;
}
