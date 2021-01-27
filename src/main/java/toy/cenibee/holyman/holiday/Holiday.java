package toy.cenibee.holyman.holiday;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotEmpty;

@Embeddable
public class Holiday {
    private static final Integer COUNT_TO_TIME = 8;

    @NotEmpty
    private Integer holidayCount;

    @NotEmpty
    private Integer holidayTime;

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public Integer getHolidayCount() {
        return holidayCount;
    }
    public void setHolidayCount(Integer holidayCount) {
        this.holidayCount = holidayCount;
    }
    public Integer getHolidayTime() {
        return holidayTime;
    }
    public void setHolidayTime(Integer holidayTime) {
        this.holidayTime = holidayTime;
    }
}
