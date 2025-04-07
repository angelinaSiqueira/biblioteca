public class Estudante
{
    private String nome;
    private int matricula;
    private int creditos;
    
    public Estudante(int matricula){
        this.matricula = matricula;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome(){
        return this.nome;
    }
    
    public int getMatricula(){
        return this.matricula;
    }
    
    public int getCreditos(){
        return this.creditos;
    }
    
    public boolean adicionarCreditos(int quantidade){
        if (quantidade > 0){
            this.creditos = this.creditos + quantidade;
            // comando simplificado: this.creditos += quantidade;
            return true;
        }else{
            return false;
        }
    }
    
    public String calcularLogin(){
        // 3 primeiros caracteres do nome + 3 últimos dígitos da matrícula
        String caracteresNome = this.nome.substring(0, 3);
        String matriculaStr = String.valueOf(this.matricula);
        String digitosMatricula = matriculaStr.substring(matriculaStr.length() - 3);
        return caracteresNome + digitosMatricula;
    }
    
    public String toString(){
        // Nome: Angelina, Matrıcula: 556644, Login: Ang644, Creditos: 36
        String texto = "Nome: "+this.nome; // this.getNome()
        texto = texto + ", Matricula: "+this.matricula;
        texto = texto + ", Login: "+this.calcularLogin(); 
        texto = texto + ", Creditos: "+this.creditos;
        return texto;
    }
        
}
