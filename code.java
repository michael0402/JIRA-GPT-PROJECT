.
Here's an example of a Python program that generates random numbers using the Scipy library:
```
import random

# Set seed value for random numbers
random.seed(42)

# Generate a list of numbers between 1 and 10
numbers = list(range(1, 11))

# Print a random number
print(numbers[random.randint(0, len(numbers)-1)])
```
In this program, we first import the `random` library and set the seed value to 42. Then, we generate a list of numbers between 1 and 10 using the `list()` function. Finally, we use the `random.randint()` function to generate a random index between 0 and 9, which we use to select a random number from the list.

You can run this program by saving it in a file called `random_numbers.py` and running it