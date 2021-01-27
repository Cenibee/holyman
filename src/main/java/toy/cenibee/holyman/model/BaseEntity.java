package toy.cenibee.holyman.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

/**
 * {@code id} 속성만을 가지는 간단한 자바빈 도메인 오브젝트이다.
 * 모든 도메인 오브젝트는 본 클래스를 확장해야한다.
 */
@MappedSuperclass
public class BaseEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public boolean isNew() {
        return this.id == null;
    }

    // -------------------------
    // |-- getters & setters --|
    // -------------------------
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
}
