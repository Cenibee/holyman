package toy.cenibee.holyman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(proxyBeanMethods = false)
public class HolyManApplication {

    public static void main(String[] args) {
        SpringApplication.run(HolyManApplication.class, args);
    }
}
