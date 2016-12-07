// What is the largest prime factor of the number 600851475143 ?

package main

import (
	"fmt"
	"math"
)

const num int = 600851475143

func isPrime(x int) bool {
	for i := 2; i < x; i++ {
		if x%i == 0 {
			return false
		}
	}
	if x > 1 {
		return true
	}
	return false
}

func isFactor(x int) bool {
	if num%x == 0 {
		return true
	}
	return false
}

func main() {
	max := int(math.Sqrt(float64(num)))
	for i := max; i > 2; i-- {
		if isFactor(i) == true {
			if isPrime(i) == true {
				fmt.Println(i, " is the largest prime factor")
				i = 0
			}
		}
	}
}

// 4613732
