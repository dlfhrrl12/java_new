package jbdc;

import java.util.List;

public class ProductServiceImpl implements Service {
	private DAO dao; //인터페이스
	public ProductServiceImpl() {
		dao = new ProductDAOImpl(); // 구현체
	}
	@Override
	public int register(ProductVo p) {
		// 실제 구현 영역
		System.out.println("register serviceImpl success!!");
		//각 DAO에게 저장 요청
		//dao 요청시 sql구문과 비슷하게 메서드명을 작성하는 것이 일반적
		return dao.insert(p);
	}
	@Override
	public List<ProductVo> getList() {
		// TODO Auto-generated method stub
		System.out.println("list sericeImpl success!!");
		return dao.selectList();
	}
	@Override
	public ProductVo getDetail(int pno) {
		// TODO Auto-generated method stub
		System.out.println("detail sericeImpl success!!");
		return dao.selectOne(pno);
	}
}
