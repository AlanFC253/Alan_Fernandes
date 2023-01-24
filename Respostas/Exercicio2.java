import javax.swing.JOptionPane;

public class Exercicio2 {
    public static void main(String[] args) {
        double numeroInformado = Integer.parseInt(JOptionPane.showInputDialog(null, "Por favor!\nInforme um numero para sabe se ele pertence ou não a sequencia de Fibonacci: "));
        
        int primeiro = 0;//1
        int seguinte = 1;//1

        int calculo=0;//1

        while(calculo< numeroInformado){
            calculo=primeiro+seguinte;
            primeiro=seguinte;
            seguinte=calculo;
        }

        if (calculo == numeroInformado) {
            JOptionPane.showMessageDialog(null, "O valor informado existe na sequência de  FIbonacci;");
        }else{
            JOptionPane.showMessageDialog(null, "O valor informado não existe na sequência de  FIbonacci;");
        }
    }
}
