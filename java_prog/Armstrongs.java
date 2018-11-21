							/*Armstrong number*/

package com.reg.java;

import java.util.Scanner;

public class Armstrongs 
{
	public static void main(String[] args)  
	{  
		//Entering a dynamic input     
		Scanner s = new Scanner(System.in);  
		System.out.print("Enter a number : ");  
		int n = s.nextInt();
		    
		int check=0,a,temp; 
		        
		temp=n;  
		
		//To check for positive integer
		while(n>0)  
		{  
			a=n%10;  				//for the lsb 
		    n=n/10;  				//removing that digit
		    check=check+(a*a*a);  	// adding all the digits by cubing it.
		 }  
		
		//if the temp = check ,it's an armstrong no.
		 if(temp==check)  
			 	System.out.println("given number is an armstrong number" + temp);   
		 else  
		        System.out.println("given number is not an armstrong number" + temp);   
		 	}  
		}  