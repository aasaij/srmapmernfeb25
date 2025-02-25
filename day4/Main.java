import java.io.Console;
class Main {
    public static void main(String[] args) {
        Console con = System.console();
        int x, y, z;
        System.out.println("Welcome world of Exception Handling");
        // Integer xObj = x; // boxing or auto-boxing
        while (true){
            try{
                x = Integer.parseInt(con.readLine());
                y = Integer.parseInt(con.readLine());            
                z = x / y;
                System.out.println(z);
                break;
            }
            catch(ArithmeticException ex){
               System.out.println("The divisor should be non-zero");
            }
            catch(NumberFormatException ex){
                System.out.println("Please enter digits only...");
            }
            finally{
                System.out.println("Closure functions should be here");
            }
        }
 
        System.out.println("Thank you for being very very interactive!");
    }
}