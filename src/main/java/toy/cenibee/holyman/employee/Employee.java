package toy.cenibee.holyman.employee;

import toy.cenibee.holyman.department.Department;
import toy.cenibee.holyman.holiday.Holiday;
import toy.cenibee.holyman.model.NamedEntity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Employee extends NamedEntity {

    @NotEmpty
    private String mailAddress;

    @NotEmpty
    private String address;

    @NotEmpty
    private String phNumber;

    @NotNull
    private Date entranceDate;

    @NotNull
    private Holiday holiday;

    @NotNull
    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "EMPLOYEE_BELONG_TO_DEPARTMENT"))
    private Department department;

    public Employee() {}

    public Employee(String name, String mailAddress, String address, String phNumber,
                    Date entranceDate, Holiday holiday, Department department) {
        this.setName(name);
        this.mailAddress = mailAddress;
        this.address = address;
        this.phNumber = phNumber;
        this.entranceDate = entranceDate;
        this.holiday = holiday;
        this.department = department;
    }

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public String getMailAddress() {
        return mailAddress;
    }
    public void setMailAddress(String mailAddress) {
        this.mailAddress = mailAddress;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getPhNumber() {
        return phNumber;
    }
    public void setPhNumber(String phNumber) {
        this.phNumber = phNumber;
    }
    public Date getEntranceDate() {
        return entranceDate;
    }
    public void setEntranceDate(Date entranceDate) {
        this.entranceDate = entranceDate;
    }
    public Holiday getHoliday() {
        return holiday;
    }
    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }
    public Department getDepartment() {
        return department;
    }
    public void setDepartment(Department department) {
        this.department = department;
    }
}
