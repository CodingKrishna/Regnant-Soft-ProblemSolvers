//Find the index of a given element

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class index{

    public static void main(String args[]) throws IOException{
        String ch[] = new String[4];
        ch[0]="Hai";
        ch[1] ="bye";
        ch[2] ="welcome";
        ch[3] ="TakeCare";

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String k = br.readLine();
        for(int x=0; x<ch.length; x++){
            if(k.equals(ch[x])){
                System.out.println("Given word is at "+x+"index");
            }
            
        }

        
    }
}