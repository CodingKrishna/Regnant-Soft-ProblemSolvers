package com.reg.java;

import java.util.Scanner;

public class PrimeNum {

	public static void main(String[] args) 
	{
	       Scanner s = new Scanner(System.in);  
	       System.out.print("Enter a number : ");  
	       int n = s.nextInt(); 
	       int m=n/2;
	       int i=0;
	       int check = 0;
	       if(n==0||n==1)
	       {
	    	   System.out.println("not a prime number" + n);
	      }
	       else
	       {
	    		       
	       for (i = 2; i < m; i++) 
	       {
			if(n%i==0)
			{
				System.out.println("not a Prime number" + n);
				check=1;
				break;
			}
	       }

	       if(check==0)
			{
				System.out.println("Prime Number" + n);
			
			}
		}
	}
}
