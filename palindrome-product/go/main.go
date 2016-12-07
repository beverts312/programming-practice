// Find the largest palindrome made from the product of two 3-digit numbers.

package main

import (
	"fmt"
	"sort"
	"strconv"
)

func isPalindrome(x int) bool {
	xStr := strconv.Itoa(x)
	length := len(xStr)
	for i := 0; i < length; i++ {
		if xStr[i] != xStr[(length-1)-i] {
			return false
		}
	}
	return true
}

func main() {
	possible := []int{0}
	t := 0
	for i := 999; i > 100; i-- {
		for j := 999; j > 100; j-- {
			t = i * j
			if isPalindrome(t) == true {
				possible = append(possible, t)
			}
		}
	}
	sort.Ints(possible)
	fmt.Println(possible[len(possible)-1])
}

// 906609
