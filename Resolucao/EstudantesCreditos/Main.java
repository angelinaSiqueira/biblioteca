public class Main
{
    public static void main(String[] args){
        
        Estudante est1 = new Estudante(556644);
        Estudante est2 = new Estudante(578035);
        
        est1.setNome("Angelina");
        est1.adicionarCreditos(35);
        
        est2.setNome("Beth");
        est2.adicionarCreditos(80);
        
        
        // manipulações do est1
        System.out.println(est1.calcularLogin());
        System.out.println(est1.toString());
        est1.adicionarCreditos(4);
        System.out.println(est1.toString());
        est1.setNome("Angelina Siqueira");
        System.out.println(est1.calcularLogin());
        System.out.println(est1.toString());
        
        // manipulações do est2
        System.out.println(est2.toString());
        est2.adicionarCreditos(-8);
        System.out.println(est2.toString());
        est2.setNome("Elizabeth");
        System.out.println(est2.calcularLogin());
    }
}
