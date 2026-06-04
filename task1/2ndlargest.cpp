#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int secondLargest(vector<int>& arr) {
    int largest = INT_MIN;
    int secondLargest = INT_MIN;

    for (int num : arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return (secondLargest == INT_MIN) ? -1 : secondLargest;
}

int main() {
    vector<int> arr = {12, 35, 1, 10, 34, 1};
    cout << secondLargest(arr);
}