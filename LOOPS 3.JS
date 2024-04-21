public class PrimeNumbers {
    public static void main(String[] args) {
        for (int i = 2; i <= 500; i++) {
            if (isPrime(i)) {
                System.out.print(i + ", ");
            }
        }
    }

    // Función para verificar si un número es primo
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
