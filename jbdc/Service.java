package jbdc;

import java.util.List;

public interface Service {

	int register(ProductVo p);

	List<ProductVo> getList();

	ProductVo getDetail(int pno);

}
