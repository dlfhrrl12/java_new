package jbdc;

import java.util.List;

public interface DAO {

	int insert(ProductVo p);

	List<ProductVo> selectList();

	ProductVo selectOne(int pno);

}
