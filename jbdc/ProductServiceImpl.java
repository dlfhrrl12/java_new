package jbdc;

import java.util.List;

public class ProductServiceImpl implements Service {
	private DAO dao; //�������̽�
	public ProductServiceImpl() {
		dao = new ProductDAOImpl(); // ����ü
	}
	@Override
	public int register(ProductVo p) {
		// ���� ���� ����
		System.out.println("register serviceImpl success!!");
		//�� DAO���� ���� ��û
		//dao ��û�� sql������ ����ϰ� �޼������ �ۼ��ϴ� ���� �Ϲ���
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
