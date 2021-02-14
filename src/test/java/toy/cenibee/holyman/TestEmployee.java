package toy.cenibee.holyman;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import toy.cenibee.holyman.employee.EmployeeRepository;

@SpringBootTest
public class TestEmployee {

    @Autowired
    EmployeeRepository employeeRepository;

    @Test
    @DisplayName("리포지토리 의존 주입 테스트")
    void EmployeeRepositoryIsNotNull() {
        assertThat(employeeRepository).isNotNull();
    }

    @Test
    @DisplayName("DB 로더 테스트")
    void TestPreloader() {
        assertThat(employeeRepository.count()).isEqualTo(6);
    }

    @Test
    @DisplayName("본격 테스트")
    void myTest() {
        employeeRepository.findAll().forEach((employee -> {
            assertThat(employee.getDepartment()).isNotNull();
            assertThat(employee.getDepartment().getName()).isEqualTo("test dept");
        }));
    }
}
