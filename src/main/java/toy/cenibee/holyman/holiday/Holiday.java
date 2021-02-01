package toy.cenibee.holyman.holiday;

import javax.persistence.Embeddable;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

@Embeddable
public class Holiday {
    private static final Integer COUNT_TO_TIME = 8;

    @Min(0)
    private Integer holidayCount;

    @Min(0)
    @Max(7)
    private Integer holidayTime;

    public Holiday(){}

    public Holiday(Integer holidayCount, Integer holidayTime) {
        this.holidayCount = holidayCount;
        this.holidayTime = holidayTime;
    }

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
