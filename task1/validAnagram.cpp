#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

bool isAnagram(string s1, string s2) {

    string a = "", b = "";

    for(char c : s1)
        if(c != ' ')
            a += tolower(c);

    for(char c : s2)
        if(c != ' ')
            b += tolower(c);

    if(a.length() != b.length())
        return false;

    unordered_map<char, int> freq;

    for(char c : a)
        freq[c]++;

    for(char c : b) {
        if(freq[c] == 0)
            return false;
        freq[c]--;
    }

    return true;
}

int main() {
    cout << isAnagram("Listen", "Silent");
}