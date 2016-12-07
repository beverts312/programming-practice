// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

package main

import "fmt"

func fibonacci(x int) int {
	if x <= 1 {
		return 1
	}
	return fibonacci(x-1) + fibonacci(x-2)
}

func isEven(x int) bool {
	if x%2 == 0 {
		return true
	}
	return false
}

func main() {
	max := 4000000
	answer := 0
	n := 0
	i := 2
	for n < max {
		if isEven(n) == true {
			answer += n
		}
		n = fibonacci(i)
		i++
	}
	fmt.Println(answer)
}

// 4613732
