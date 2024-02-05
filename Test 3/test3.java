import java.util.Scanner;

public class test3 {
    public static String f(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }

        int minLength = Integer.MAX_VALUE;
        for (String str : strs) {
            minLength = Math.min(minLength, str.length());
        }

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < minLength; i++) {
            char ch = strs[0].charAt(i);

            for (int j = 1; j < strs.length; j++) {
                if (i >= strs[j].length() || strs[j].charAt(i) != ch) {
                    return result.toString();
                }
            }

            result.append(ch);
        }

        return result.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("arr : ");
        int n = scanner.nextInt();

        if (n < 1 || n > 200) {
            System.out.println("Error");
            return;
        }

        String[] words = new String[n];

        System.out.println("word :");
        for (int i = 0; i < n; i++) {
            words[i] = scanner.next();
            if (words[i].length() < 0 || words[i].length() > 200) {
                System.out.println("Error");
                return;
            }
        }

        String result = f(words);
        System.out.println("result : " + result);
    }
}
