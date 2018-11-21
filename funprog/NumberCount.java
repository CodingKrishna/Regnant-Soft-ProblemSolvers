package com.reg.java;


import java.util.*; 
public class NumberCount{ 

	public static void main(String[] args)
	{
		System.out.println("Welcome");
			Scanner sc=new Scanner(System.in);
		System.out.println("Enter the size of the array: ");
		int s=sc.nextInt();
	    int[] num=new int[s];
	 
	    System.out.println("enter the numbers for array:");
	    for(int i=0;i<s;i++){
	    	num[i] = sc.nextInt();
	    }
	    System.out.print("Numbers  :  count"+"\n");
	    int count=1;
	    Arrays.sort(num);
	    for(int i=0;i<s;i++){
	        for(int j=0;j<i;j++){
	            if(num[i]==num[j] && j!=i){
	                count=count+1;
	            }
	        }
	        System.out.print(num[i]+" - "+count+"\n");
	        count=1;
      }
	
	
}
}
