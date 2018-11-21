package com.reg.java;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MatheSwitch 
{

	public static void main(String[] args) throws IOException 
	{
			
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		
		
		System.out.println("Select anyone option: 1)circle or 2)triangle ");
		String opt=br.readLine();
		Integer i=Integer.parseInt(opt);
		
		
		switch(i)
		{
			case 1:
			{
				System.out.println("Enter any one operation to be find: 3)perimeter of a circle 4)area of a circle ");
				String opt1=br.readLine();
				Integer i1=Integer.parseInt(opt1);
				
			switch(i1)
			{
				case 3:
				{
					double c;
					System.out.println("Enter the value of r");
					String opt2=br.readLine();
					Double i2=Double.parseDouble(opt2);
					System.out.println("The circumference of the circle is " + (2*3.14*i2));
					break;
				}
				case 4:
				{
					double a;
					System.out.println("Enter the value of r");
					String opt3=br.readLine();
					Double i3=Double.parseDouble(opt3);
					
					System.out.println("The area of a circle is  " + (3.14*i3*i3));
					break;
				}
			}	
			}
			case 2:
			{
				System.out.println("Enter any one operation to be find: 3)Perimeter of a triangle 4)area of a triangle ");
				String opt4=br.readLine();
				Integer i4=Integer.parseInt(opt4);
			
			switch(i4)
			{
			case 5:
				{
					double a,b,c;
					System.out.println("Enter the value of a");
					String opt5=br.readLine();
					Integer i5=Integer.parseInt(opt5);
					
					System.out.println("Enter the value of B");
					String opt6=br.readLine();
					Integer i6=Integer.parseInt(opt6);
				
					System.out.println("Enter the value of C");
					String opt7=br.readLine();
					Integer i7=Integer.parseInt(opt7);
					
					System.out.println("The perimeter of the triangle is : " + a+b+c  );
					
				}
				case 6:
				{
					
					double b,h;
					System.out.println("Enter the value of b");
					String opt8=br.readLine();
					Integer i8=Integer.parseInt(opt8);
					
					System.out.println("Enter the value of h");
					String opt9=br.readLine();
					Integer i9=Integer.parseInt(opt9);
				
					System.out.println("The area of a triangle is : " + 0.5*b*h);
				}
				}
				}
		}
	}
	}	
