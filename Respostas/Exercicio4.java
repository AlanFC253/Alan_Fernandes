
import javax.swing.JOptionPane;

public class Exercicio4 {
    public static void main(String[] args) {
        double[] estados = { 
            67836.43,
            36678.66,
            29229.88,
            27165.48,
            19849.53
        };
        
        String[] nomeEstados = {"SP","RJ","MG","ES","Outros"};

        double somaTotal = 0;

        for(int i =0; i < estados.length;i++){
            somaTotal += estados[i];
        }

        for(int i =0; i <estados.length;i++){
            CalcularPercentual(estados[i],somaTotal,nomeEstados[i]);
        }

        System.out.println(somaTotal);

    }

   public static void CalcularPercentual(double estado,double somaTotal,String nomeEstado) {
    double porcentagem = estado*100/somaTotal;
    JOptionPane.showMessageDialog(null,String.format("O percetual do estado "+nomeEstado+" foi de %.2f",porcentagem));
   }
}
