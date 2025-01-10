# JavaScript Loose Comparison Bug
This repository demonstrates a common error in JavaScript related to loose comparison (==) when handling null or undefined values.

The bug is in the `foo` function.  When using loose comparison (==), 0 is considered loosely equal to null which cause unexpected behavior. 

The solution uses strict equality (===) to address this issue.