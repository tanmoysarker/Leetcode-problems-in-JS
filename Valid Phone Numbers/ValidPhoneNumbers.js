// Given a text file file.txt that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.

// You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)

// You may also assume each line in the text file must not contain leading or trailing white spaces.

// Example:

// Assume that file.txt has the following content:

// 987-123-4567
// 123 456 7890
// (123) 456-7890
// Your script should output the following valid phone numbers:

// 987-123-4567
// (123) 456-7890


// Read from the file file.txt and output all valid phone numbers to stdout.
egrep '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt

//    ^ -> Start of the Line.
//    $ -> End of the Line.
//    ([0-9]) -> Value Range can be between 0 to 9.
//    ([0-9]{3}) -> Value Range can be between 0 to 9 and repeats three times.
//    (a | b) -> Possible values are a or b.