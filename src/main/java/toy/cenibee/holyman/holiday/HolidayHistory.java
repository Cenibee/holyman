package toy.cenibee.holyman.holiday;

import org.springframework.lang.NonNull;
import toy.cenibee.holyman.employee.Employee;
import toy.cenibee.holyman.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("not null")
public class HolidayHistory extends BaseEntity {

    @NotEmpty
    private Date historyDate;

    @NotEmpty
    private Holiday holiday;

    @NotEmpty
    private String description;

    @NotEmpty
    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "EMPLOYEE_HOLIDAY_HISTORY"))
    private Employee employee;

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public Date getHistoryDate() {
        return historyDate;
    }
    public void setHistoryDate(Date historyDate) {
        this.historyDate = historyDate;
    }
    public Holiday getHoliday() {
        return holiday;
    }
    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Employee getEmployee() {
        return employee;
    }
    public void setEmployee(@NonNull Employee employee) {
        this.employee = employee;
    }
}
