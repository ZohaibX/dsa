/* 
/// 1 - Sort 10 schools around your house by distance:
// if data is sorted -- and small -- then, I will prefer to use Insertion Sort 

/// 2 - eBay sorts listings by the current Bid amount:
// amount will most probably be in intergers -- like 1-100 dollars 
// if that's so, I'll use Radix or Counting Sort 

/// 3 - Sport scores on ESPN
// scores could be any type of data, if it cares about memory, then quick sort is best -- 
// and if it cares about worst case of quick sort, merge is good -- this is a trade off 

/// 4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//  could be sorting by user's dateOfBirth
// if efficiency matters, i'll be using merge sort 

/// 5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// although data could be larger - but it will be already sorted -- just need to add 2 new reviews 
// so Insertion sort, i will be using 

/// 6 - Temperature Records for the past 50 years in Canada
// if temprature record is in integers like -30 to 49 celcius - then, ill be using radix or counting 
// but if it is in some other format -- may be some decimal places 
// i will be using quick sort if we care about memory -- and not it's worst case 

/// 7 - Large user name database needs to be sorted. Data is very random.
// if data is large, i would care about memory and will use quick sort 

/// 8 - You want to teach sorting for the first time
// for teaching, i will start by bubble and selection sort 

//! FUNDAMENTALS 
///- WHEN TO USE WHAT ?

Insertion sort: when we have smaller input and mostly sorted -- this is really fast -- uses little space 
Bubble Sort: Never gonna use it -- just being taught for educational purpose - not efficient 
Selection Sort: same review as Bubble 
Merge Sort: It is good because Time complexity's best, average and worst case is O(n logn) -- better than n^2
            but it will cost enough in memory - as worst case for space is O(n) - so not good if we care about memory 
Quick Sort: this is better than Merge as it's best and average cases for time are O(n logn) - (same as merge)
            and space is O(log n) -- far better than merge 
            but it's time worst case (if we take wrong pivot element) is O(n^2)
            so if we care about time's worst case .. then, merge is better 
Heap Sort is good in Big-O than merge and quick - but it's slower -- and we use quick and merge most of the time 
Radix and Counting sorts are used for fixed amount of (Only Integers) data type -- they are fastest


*/