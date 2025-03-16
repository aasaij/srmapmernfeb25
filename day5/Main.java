class Employee{
    private int id;
    private String name;
    public Employee(int id, String name){
        this.id = id;
        this.name = name.toUpperCase();
    }
    @Override
    public String toString(){
        return "Employee[id=" + id + ",Employee Name : "+ name + "]";
    }
}

public class Main
{
	public static void main(String[] args) {
		Employee emp = new Employee(101, "Surya");
// 		String str = "" + emp;
		System.out.println(emp);
	}
}