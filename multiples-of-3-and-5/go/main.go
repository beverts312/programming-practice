// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

package main

import "fmt"

func isMultipleOfThreeOrFive(x int) bool {
	if x % 3 == 0 {
		return true
	} else if x % 5 == 0 {
		return true
	} else {
		return false
	}
}

func main() {
	answer := 0
	for i := 0; i < 1000; i++ {
		if isMultipleOfThreeOrFive(i) == true {
			answer += i
		}
	}
	fmt.Println(answer)
}
// 233168